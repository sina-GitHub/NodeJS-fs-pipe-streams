const fs = require('fs');

// append data to the end of file
const appendToFile = () => {
	fs.appendFile('index.html', '<h1>World</h1>', function (err) {
		if (err) throw err;

		// if data is written, log that...
		console.log('file is appended');
	});
};

// creates file with content
const fileWriter = () => {
	fs.writeFile('index.html', '<h1>Hello</h1>', function (err) {
		if (!err) {
			console.log('file is written');
			appendToFile();
		} else {
			console.log('writing failed');
		}
	});
};

fs.readFile('index.html', 'utf8', function (err, data) {
	// reads file if exist and creates if not...
	if (data) {
		appendToFile();
	} else {
		fileWriter();
	}

	// fs.unlink('index.html'); -> delete file
});
