var cookieParser = require('cookie-parser');
const express = require('express');
var router = express.Router();
var app = express();
var http = require('http');
router.route('/process/setUserCookie').get(function(req, res) {
router.route('/process/setUserCookie').get(function(req, res) {
    console.log('/process/setUserCookie 호출됨.');
    // 쿠키 설정
    res.cookie('user', {
    id: 'sunny',
    name: '소녀시대',
    authorized: true
    });
    // redirect로 응답
    res.redirect('/process/showCookie');
    });
});
console.log('/process/setUserCookie 호출됨.');

router.route('/process/showCookie').get(function(req, res) {
    console.log('/process/showCookie 호출됨.');
    
    res.send(req.cookies);
});
app.use('/',router);
http.createServer(app);