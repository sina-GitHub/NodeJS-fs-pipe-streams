const fs = require('fs');

const readStream = fs.createReadStream(
	__dirname + '/readableStreams-sample.txt',
	'utf8',
);

const writeStream = fs.createWriteStream(__dirname + '/writeStream-sample.txt');

// METHOD 1
// readStream.on('data', function (chunk) {
// 	console.log('new chunk of data...');
// 	writeStream.write(chunk);
// });

// METHOD 2
readStream.pipe(writeStream);
