// Een eenvoudige webserver.

// 0. initialisatie en variabelen
var http = require('http');

// 1. Maak de webserver
var server = http.createServer(function (request, response) {
    // 1a. Check of de root wordt opgevraagd.
    var url = request.url;

    // 1b. Check of bestand bestaat.
    response.writeHead(200, {'Content-Type' : 'application/json' });
    if (url === '/john') {
        response.write(JSON.stringify(john));
    }
    else if (url === '/jane') {
        response.write(JSON.stringify(jane));
    }
    else {
        response.write(JSON.stringify(wrongUrl));
    }
    response.end();

});

var john = {"voornaam" : "John", "achternaam" : "Doe"};
var jane = {"voornaam" : "Jane", "achternaam" : "Doe"};
var wrongUrl = {"statuscode" : 404, "message": "Page does not exist"};

// 2. Start de server
server.listen(3000);
console.log('Server gestart op http://localhost:3000');
