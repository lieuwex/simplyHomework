Package.describe({
	name: 'gravatar-binding',
	version: '0.0.1',
	summary: 'Gravatar binding for simplyHomework.',
	git: '',
	documentation: 'README.md',
});

Npm.depends({
	request: '2.61.0',
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.2');

	api.use('simply:external-services-connector');
	api.use('jparker:crypto-md5', 'server');

	api.addFiles('info.js');
	api.addFiles('gravatar-binding.js', 'server');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('gravatar-binding');
	api.addFiles('gravatar-binding-tests.js');
});
