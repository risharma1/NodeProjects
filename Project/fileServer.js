var http = require("http"); /*core module hence no ./  */
var fs = require("fs");

/* send the response object reference */
function error404response(response){
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Reuqested resource could not be found.");
	response.end();
}


/* handle user request */
function onRequest(request, response){
	console.log("Request made for url: "+ request.url);
	if(request.method == "GET" && request.url == "/"/*file check*/){
		response.writeHead(200/*response Code*/, {"Context-Type": "text/plain"}/*header object*/);
		fs.ceateReadStream("./index.html").pipe(response);
	}else{
		error404response(response);
	}
}

http.createServer(onRequest/*request handler callback*/).listen(8888/*listening port*/);
console.log("Server started.");