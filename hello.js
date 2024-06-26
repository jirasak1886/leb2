var http = require("http");
listener =function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h2 style ="text-align:center;">Hello</h2>');
}
sever = http.createServer(listener);
sever.listen(4000);

console.log("Server running at http://127.0.0.1:4000");