define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	'router'
], function($, _, Backbone, Semantic, Router){
	var initialize = function(){
		Router.initialize();
	}

	return {
		initialize: initialize
	}
});