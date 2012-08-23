var wrench = require('wrench');
var hint = require('jshint/lib/hint');
var config = require('./jshint');

function sourcePath(path) {
	return 'src/' + path;
}

var files = wrench.readdirSyncRecursive('src').map(sourcePath);
var errors = hint.hint(files, config);

if (errors.length === 0) {
	console.log('OK');
} else {
    console.log('FAILED');
    process.exit(1);
}
