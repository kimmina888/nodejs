// JSON 객체
var person ={name:'소녀시대',age:20};
res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
res.end(person);

var person ={name:'소녀시대',age:20};
var personStr = JSON.stringify(person);
res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
res.end(personStr);

var person ={name:'소녀시대',age:20};
var personStr = JSON.stringify(person);
res.end(personStr);

var person ={name:'소녀시대',age:20};
var personStr = JSON.stringify(person);
res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
res.end(personStr);

var person ={name:'소녀시대',age:20};
var personStr = JSON.stringify(person);
res.send(personStr);

var person ={name:'소녀시대',age:20};
res.send(person);

req.user = 'sunny';
res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
res.end('<h1>Express 서버에서 ' + req.user + '를 res,wirteHead와 end로 응답한 결과입니다.</h1>');

req.user = 'sunny';
res.send('<h1>Express 서버에서 ' + req.user + '를 send로 응답한 결과입니다.</h1>');