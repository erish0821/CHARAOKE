const db = require('../model/db.js')

module.exports = {
    getAll : () => {
        const query = 'select * from songs';
        db.getConnection
        
        db.execute(query, (err, result) => {
            if(err){
                console.log("에러 발생", err);
                return;
            }else{
                console.log("result : ",result);
                return result;
            }
        })
    }
}