var http = require("http"); /*core module hence no ./  */

function onRequest(request, response){
	console.log("Request made for url: "+ request.url);
	response.writeHead(200/*response Code*/, {"Context-Type": "text/plain"}/*header object*/);
	response.write("I am body text.My type is plain text.");
	response.end();/*sends response*/
}

http.createServer(onRequest/*request handler callback*/).listen(8888/*listening port*/);
console.log("Server started.");