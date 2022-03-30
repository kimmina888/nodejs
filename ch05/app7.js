// Express 기본 모듈 불러오기
var express = require('express')
, http = require('http')
, path = require('path');
// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
, static = require('serve-static');
// 익스프레스 객체 생성
var app = express();
// 기본 속성 설정
app.set('port', process.env.PORT || 3000);
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))
// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())
app.use('/public', static(path.join(__dirname, 'public')));