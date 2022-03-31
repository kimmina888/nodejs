var express = require('express');
var http = require('http');
const { json } = require('nconf/lib/nconf/formats');
const { runInNewContext } = require('vm');
var app = Express();

app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');

    // var person = {name : '방탄소년단', age : 20};
    // res.send(person);
    // var personStr = JSON.stringify(person);
    // res.send(personStr);

    // res.writeHead('200',{"content - type":"apllication/json; charset=utf8"});
    // res.write();
    // res.end();

    // var person ={name:'소녀시대',age:20};
    // res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    // res.end(person);
    // var person ={name:'소녀시대',age:20};
    // var personStr = JSON.stringify(person);
    // res.end(personStr);

    // 데이터는 HTML 문자열
    var person ={name:'소녀시대',age:20};
    var personStr = JSON.stringify(person);
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end(personStr);
    // var person ={name:'소녀시대',age:20};
    // var personStr = JSON.stringify(person);
    // res.send(personStr);
    // var person ={name:'소녀시대',age:20};
    // res.send(person);
    // req.user = 'sunny';
    // res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    // res.end('<h1>Express 서버에서 ' + req.user + '를 res,wirteHead와 end로 응답한 결과입니다.</h1>');
    // req.user = 'sunny';
    // res.send('<h1>Express 서버에서 ' + req.user + '를 send로 응답한 결과입니다.</h1>');
});
http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000')
})