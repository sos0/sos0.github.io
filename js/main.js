'use strict';

require.config({
  	shim: {
  	    underscore: {
            exports: '_'
        },
  	    backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        semantic: {
            deps: ['jquery']
        }
  	},
  	paths: {
	    jquery: 'lib/jquery-1.10.2.min',
	    underscore: 'lib/underscore-min',
	    backbone: 'lib/backbone-min',
	    semantic: 'lib/semantic',
	    templates: 'templates'
  	}
});

require([
	'backbone',
	'app',
    'router'
], function(Backbone, App, Router){
    new Router();
    Backbone.history.start();
	new App();
});