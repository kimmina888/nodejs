var http = require('http');
var fs = require('fs');

var server = http.createServer();

var port = 3000ㄴ;
server.listen(port,function(){
    console.log('웹 서버가 시작도었스비낟. : %d',port);
})

server.on('connection',function(socket){
    console.log('클라이언트가 접속했습니다. : 5s, %d',socket.remoteAddress,socket.remotePort);
});

server.on('request',function(req,res){
    console.log('클라이언트 요청이 들어왔습니다.');
    var filename = 'house.png';
    fs.readFile(filename,function(err,data){
        res.writeHead(200,{'ConTent-Type':"image/png"});
        res.write(data);
        res.end();
    })
});

server.on('close',function(){
    console.log('서버가 종류됩니다.');
})