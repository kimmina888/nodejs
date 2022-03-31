var http = require('http');
var express = require('express');
var app = express();
app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    res.redirect('http://google.co.kr');
});
http.createServer(app,1000);