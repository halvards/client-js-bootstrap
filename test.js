var mkdirp = require('mkdirp');
var wrench = require('wrench');
var requirejs = require('requirejs');
var jasmine = require('jasmine-node');
var reporter = require('jasmine-node/lib/jasmine-node/reporter');
require('jasmine-reporters');

function isSource(path) {
	return path.match(/\.js$/) && !path.match(/main\.js$/);
}

function isSpec(path) {
	return path.match(/\.spec\.js$/);
}

function load(root) {
	return function(path) {
		requirejs(root + '/' + path);
	}
}
	
requirejs.config({
	nodeRequire: global.require,
	appDir: 'src',
	baseUrl: 'src',
    enforceDefine: false,
	optimize: 'none',
	paths: {}	
});

wrench.readdirSyncRecursive('src').filter(isSource).forEach(load('src'));
wrench.readdirSyncRecursive('specs').filter(isSpec).forEach(load('specs'));

mkdirp.sync('out/reports');

jasmine.getEnv().addReporter(new reporter.jasmineNode.TerminalReporter({}));
jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('out/reports/'));
jasmine.getEnv().execute();

//	
// Enough time for the spec runner to finish. Why not async?!!!
//

setTimeout(function() {
	if (jasmine.getEnv().currentRunner().results().failedCount !== 0) {
        console.log('FAILED');
        process.exit(1);    
	}		
}, 300);
