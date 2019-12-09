// Een eenvoudige webserver.

// 0. initialisatie en variabelen
var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    root = __dirname + '/oef3_jsons/'; // magic variable

// 1. Maak de webserver
var server = http.createServer(function (req, res) {
    // 1a. Check of de root wordt opgevraagd.
    var fileName = '';
    var url = req.url;
    
    fileName = root + url;
    console.log('Gevraagd bestand: ', path.basename(fileName));

    // 1b. Check of bestand bestaat.
    fs.exists(fileName, function (exists) {
        if (exists) {
            respond(fileName); // ja.
        } else {
            fileName = root + '404.json'; // nee
            respond(fileName);
        }
    });

    // 1c. Serveer gevraagde bestand.
    function respond(requestFile) {
        res.writeHead(200, {'Content-Type':'application/json'});
	    res.write(JSON.stringify(requestFile));
	    res.end();
    }
});

// 2. Start de server
server.listen(3000);
console.log('Server gestart op http://localhost:3000');
