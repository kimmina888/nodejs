var cookieParser = require('cookie-parser');
const express = require('express');
var router = express.Router();
var app = express();
var http = require('http');
var expressSession = require('express-session');
const { runInNewContext } = require('vm');
const req = require('express/lib/request');
const session = require('express-session');
app.use(expressSession({
    secret : 'my key',
    resave : true;
    saveUnintialized : true
}));
router.route('/process/login').post(function(req,res){
    console.log('/process/login 호출됨');

    var paramId = req.body.paramId || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if(req.session.user){
        console.log('이미 로그인되어 상품 페이지로 이동합니다.');
        res.redirect('/public/product.html');
    }else{
        req.session.user = {
            id : paramId,
            name : '소녀시대',
            authorized : true
        };
    }
});
router.route('/process/logout').get(function(re1, res){
    console.log('/process/logout 호출됨');

    if(req.session.user){
        console.log('로그아웃합니다.');

        req.session.destroy(function(err){
            if(err){throw err;}
            console.log('세션을 삭제하고 로그아웃 되었습니다.');
            req.redirect('/public/login2.html');
        });
    }else{
        console.log('아직 로그인되어 있지 않습니다.');
        res.redirect('/public/login2.html');
    }
});
router.route('/process/product').get(function(req,res){
    console.log('/process/product 호출됨');

    if(req, session.user){
        res.redirect('/public/product.html');
    }else{
        res.redirect('/public/login2.html');
    }
})