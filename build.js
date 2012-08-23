var fs = require('fs');
var wrench = require('wrench');
var mkdirp = require('mkdirp');
var requirejs = require('requirejs');
var mainModules = require('./mainmodules');

function copyFileSync(srcFile, destFile) {
    fs.writeFileSync(destFile, fs.readFileSync(srcFile).toString());
}

var config = {
	appDir: 'src',
	baseUrl: '.',
    dir: 'temp',
	modules: mainModules,
    enforceDefine: false,
	optimize: 'none',
	paths: {}
};

mkdirp.sync('temp');
requirejs.optimize(config);

mainModules.forEach(function(module) {
    copyFileSync('temp/' + module.name + '.js', 'out/' + module.name + '.js');
});

wrench.rmdirSyncRecursive('temp', true);

console.log('OK');
