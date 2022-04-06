const express = require('express');
var expressErrorHandler = require('express-error-handler');
var errorHandler = expressErrorHandler({
static: {
'404': './public/404.html'
}
});
var router = express.Router();
var app = express();
app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );
router.route('./process/login 처리함').post(function(req,res){
    console.log('/process/login 처리함.');
    var paramId = req.body.id || req.query.id;
    var paramPassword = rew.password || req.query.password;
    res.writeHead('200',{'Content-Type':'text/html; charser = urf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Paramid : '+paramId+'</p></div>');
    res.write('<div><p>ParamPassword : '+paramPassword+'</p></div>');
    res.write("<br><br><a href = '/public/login2.html'>로그인 페이지로 돌아가기</a>");
    res.end();
})
app.use('/',router);

var errorHandler = expressErrorHandler({
    static:{
        '404':'./public/404.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);