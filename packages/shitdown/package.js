Package.describe({
	name: 'shitdown',
	version: '0.0.1',
	summary: 'a shitty markdown',
	git: '',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use([
		'ecmascript',
		'modules',
		'check',
	]);
	api.mainModule('shitdown.js');
});
