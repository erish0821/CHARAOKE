var createError = require('http-errors');
var express = require('express');
var session = require('express-session')
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('dotenv').config();
var port = 3000


var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');

var app = express();

app.use(session({
  secret: 'session-secret123!@#',
  resave: false,
  saveUninitialized: false,
}));

// views -> 사용하는 템플릿 엔진 이 있는 디렉토리 설정 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended : false})); // use() 를 통해 연결 시킨다! (사용하기 위해)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 쿠키 파싱을 위한 모듈
app.use(cookieParser());




app.use('/', indexRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}!`)
})

module.exports = app;
