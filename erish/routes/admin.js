var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/' , (req, res) => {
    res.render('login', {})
})

router.post('/login', (req,res) => {
    let post = req.body;    // id pw가 들어있는 body

    // id pw 추출
    let id = post.id; 
    let pw = post.pw;

    let dummyAdmin = {
        id: '123',
        pw: '123'
    }

    
    if(id == dummyAdmin.id && pw == dummyAdmin.pw){
        //req의 session에 로그인 했다고 변경
        req.session.is_logined = true;
        // 세션 id를 id로
        req.session.ss_id = id;
        req.session.save(function () {
            res.redirect(`/`);
        });
        return
    }
    else{
        res.redirect(`/admin`)
        return
    }


})

module.exports = router