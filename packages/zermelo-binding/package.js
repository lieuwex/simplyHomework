Package.describe({
	name: 'zermelo-binding',
	version: '0.0.1',
	summary: 'Zermelo binding for simplyHomework.',
	git: '',
	documentation: 'README.md',
});

Npm.depends({
	'zermelo.js': '1.0.0',
	'lru-cache': '4.0.2',
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.1');

	api.use([
		'simply:external-services-connector',
		'ecmascript',
		'modules',
	]);
	api.use([
		'stevezhu:lodash@3.10.1',
		'ejson',
		'ms',
		'mutex',
	], 'server');
	api.use([
		'coffeescript',
		'templating',
		'handlebars',
	], 'client');

	api.addFiles('info.js');
	api.addFiles('zermelo-binding.js', 'server');
	api.addFiles([
		'modal.html',
		'modal.coffee',
	], 'client');
});
