Package.describe({
	name: 'magister-binding',
	version: '0.0.1',
	summary: 'Magister binding for simplyHomework.',
	git: '',
	documentation: 'README.md',
});

Npm.depends({
	request: '2.67.0',
	'lru-cache': '3.2.0',
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.1');

	api.use([
		"stevezhu:lodash",
		"simply:magisterjs@1.14.3",
		"simply:external-services-connector",
		"ejson",
	], "server");
	api.use([
		"coffeescript",
		"templating",
		"handlebars",
	], "client");

	api.addFiles("magister-binding.js", "server");
	api.addFiles([
		"modal.html",
		"modal.coffee",
	], "client");

	//api.export("MagisterBinding", "server");
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('magister-binding');
	api.addFiles('magister-binding-tests.js', 'server');
});
