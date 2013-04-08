var PORT = 33333;
var HOST = '0.0.0.0';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var fs = require('fs');
var stream = fs.createWriteStream('./data', {'flags': 'a'});

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

stream.once('open', function(fd) {
	server.on('message', function (message, remote) {
	    	//If you want more information:
		//console.log(remote.address + ':' + remote.port +' - ' + message);
	    	
		console.log(message + '');
	        fs.appendFile('data', message + '\n', function (err) {
		});

	});
stream.end();
});

server.bind(PORT, HOST);
