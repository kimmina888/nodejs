var http = require('http');

var server = '127.30.1.36';
var port = 3000;
server.listen(port, host,'50000',function(){
    console.log('웹 서버가 시작 되었습니다. '+host+':'+port);
})