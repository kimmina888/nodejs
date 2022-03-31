var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content - Type':'text/html; charser = utf-8'});
    res.write('!DOCTYPE');
    res.write('<html>');
    res.write(' <title>응답 페이지</title>');
    res.write('</head>');
    res.write('<body>');
    res.write(' <h1> 노드에이에스로부터의 응답페이지 : silverlisten-1.js</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}).listen(8080);
