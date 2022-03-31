var express = require('express');
http = require('http');
path = require('path');

var bodyParser = require('body-parser');
const { runInNewContext } = require('vm');
static = require('serve-static');
var app = express();

app.set('port',process.env.PORT||3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',static(path.join(__dirname,'public')));
app.use(function(req,res,next){
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    var paramId = req.body.id||req.query.id;
    var paramPassword = req.body.password||req.query.password;

    res.writeHead('200',{'Content-type':'text/html/charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과 입니다.</h1>');
    res.write('<div><p>paramId : '+paramId+'</p></div>');
    res.write('<div><p>paramPassword : '+paramPassword+'</p></div>');
    res.end();
})