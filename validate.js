var fs = require('fs');
var wrench = require('wrench');
var hint = require('jshint/lib/hint');

function isJavascript(path) {
	return path.match(/\.js$/);
}

function sourcePath(path) {
	return 'src/' + path;
}
	
var config = JSON.parse(fs.readFileSync('jshint.json', "utf-8"));
var files = wrench.readdirSyncRecursive('src').filter(isJavascript).map(sourcePath);
var errors = hint.hint(files, config);

if (errors.length === 0) {
	console.log('OK');
} else {
    console.log('FAILED');
    process.exit(1);
}
