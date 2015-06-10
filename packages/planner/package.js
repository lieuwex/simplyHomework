Package.describe({
	name: 'planner',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'The plan algorithm of simplyHomework.',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.2');
	api.addFiles('planner.js');

	api.export("HomeworkDescription");
	api.export("Planner");
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('planner');
	api.addFiles('planner-tests.js');
});
