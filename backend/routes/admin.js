const model = require('../model/db')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.admin) {
    console.log(`로그인 상태 유지. 사용자 이름: ${req.session.admin.name}`);
  } else {
    console.log('로그인 안되있음')
  }
});

router.post('/login', (req, res) => {
  const { loginId, loginPw } = req.body;

  // 테이블에 일치하는 놈이 있는지 찾음
  const admin = model.find(e => e.id === loginId && e.pw === loginPw)

  // 어드민 테이블에서 찾음
  if(admin){
    // 세션 보내줌
    req.session.admin = {
      id: admin.id,
      name: admin.name
    }

    console.log('로그인 성공', admin)
    // 성공이라 알림
    res.status(200).send(admin)
  }
  // 못찾음
  else{
    // 응 실패
    res.status(401).send('로그인 실패. 아이디 또는 비밀번호가 다릅니다.')
  }
})

router.get('/logout', function(req, res) {
  req.session.destroy();
  console.log('로그아웃 성공',req.session)
  res.send(200);
});

module.exports = router;
