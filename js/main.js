require.config({
	baseUrl: './js/',
	paths: {
		bootstrap: 'lib/bootstrap.min',
		semantic: 'lib/semantic',
	    jquery: 'lib/jquery-1.10.2.min',
	    underscore: 'lib/underscore-min',
	    backbone: 'lib/backbone-min',
	    app: './app'
	},
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            exports: "Backbone",
            deps: ["underscore", "jquery"]
        },
        "bootstrap": ['jquery']
    }
});

require(['jquery','underscore','backbone','app',
], function($, _, Backbone, App){
	// The "app" dependency is passed in as "App"
	App.initialize();
});