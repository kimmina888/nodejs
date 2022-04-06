const express = require("express");
var app = express();
const { append } = require("express/lib/response");
var router = express.Router();
router.route('/process/login/:name').post(function(req, res) {
    console.log('/process/login/:name 처리함.');
    var paramName = req.params.name;
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/login3.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});
app.use('/',router);
app.all('*',function(req,res){
    res.status(404).send('<h1>홈페이지가 집으로 가버렸습니다.... /n 나중에 다시 찾아와 주십시오 ㅎㅎ...</h1>');
});

