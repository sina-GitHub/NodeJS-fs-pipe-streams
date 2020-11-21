const fs = require('fs');

// if " CD-directories " directory exists...
if (fs.existsSync('CD-directories')) {
	console.log('found');

	// if " d " directory exists...
	if (fs.existsSync('d')) {
		console.log('prepare to delete...');

		// deleting directories
		fs.rmdirSync('d');
	}
} else {
	// if " CD-directories " directory doesnt exist...
	fs.mkdir('CD-directories', function () {
		console.log('make dir done...');
	});
}
