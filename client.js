var PORT = 33333;
var HOST = 'SERVER_IP';
Tail = require('tail').Tail;
var dgram = require('dgram');
tail = new Tail("FILE_TO_TAIL");

var client = dgram.createSocket('udp4');

tail.on("line", function(data) {
		 data.length;
	client.send(new Buffer(data), 0, data.length, PORT, HOST, function(err, bytes) {
    		if (err) throw err;
		//If you want client debug:
		//console.log('Data length:' + data.length);
    		//console.log('UDP message sent to ' + HOST +':'+ PORT);
	});
});

