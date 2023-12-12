const oracledb = require("oracledb");
const express = require('express');
const dbConfig = require("../config/db.config.js");

var router = express.Router();
let connection;

oracledb.autoCommit = true;
oracledb.initOracleClient({libDir: "C:\\oracle instance\\instantclient_11_2"});
// db 접속
oracledb.getConnection({
  user          : dbConfig.user,
  password      : dbConfig.password,  // contains the hr schema password
  connectString : dbConfig.connectString
},(err, conn) => {connection = conn});



/* GET home page. */
router.get('/', function(req, res, next) {
  let is_logined = req.session.is_logined;
  let ss_id = req.session.ss_id;
  const sql = 'select * from songs'
  connection.execute(sql, (err, result) =>{
    if(err) {throw err;}
    else{
      let formattedData = [];
      result.rows.forEach(element => {
        let data = {};
        data.id = element[0]
        data.title = element[1]
        data.artist = element[2]
        data.lyrics = element[3]

        formattedData.push(data)
      })
      res.render('main', {
        data: formattedData,
        is_logined: is_logined || false,
        ss_id: ss_id || ''
      })

      console.log(`result: ${JSON.stringify(formattedData, 0, 4)}`)
    }
  })
  connection.release()
  
});


module.exports = router;

// , (err, conn) => {
//   if(err) {throw err;}
//   console.log("전체 파일 검색 성공");
  
//   // SQL 구문 실행
//   const result = conn.execute(
//     `select * from songs`,
//     [],
//     (err, result) => {
//       if(err) {throw err;}
//       // console.log(result.rows);

//       let formattedData = [];
//       result.rows.forEach(element => {
//         let data = {};
//         data.id = element[0]
//         data.title = element[1]
//         data.artist = element[2]
//         data.lyrics = element[3]

//         formattedData.push(data)
//       })

//       // console.log(formattedData)
      
//       res.json(formattedData)
      
//     });
    
//   conn.release((err) => {if(err) throw err;});
    
// }