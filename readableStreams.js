const fs = require('fs');

const readStream = fs.createReadStream(
	__dirname + '/readableStreams-sample.txt',
);

// 'utf8', third arg

readStream.on('data', function (chunk) {
	console.log('new chunk of data...');
	console.log(chunk);
});
