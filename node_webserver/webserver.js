var http = require("http");
var server = http.createServer(handleRequest);

function handleRequest(request, response){
    console.log("handling request");
    response.write("initializing request response\n");
    response.end("It works!! Path Hit: " + request.url);
}

server.listen(8888, function(){
    console.log("server listening to port http://localhost:8888");
});