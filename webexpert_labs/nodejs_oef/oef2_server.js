// De http-headers van het inkomende request tonen in de console.
var http = require('http');
var server = http.createServer(function (request, response) {
	console.log(request.headers);
	//console.log(request.headers['user-agent']); // één specifieke header tonen
	response.writeHead(200, {'Content-Type':'application/json'});
	response.write(JSON.stringify({Voornaam: "Daan", Naam : "Vandenreyt"}));
	response.end();
});
server.listen(3000); // server starten
console.log('Server gestart op http://localhost:3000 ...');