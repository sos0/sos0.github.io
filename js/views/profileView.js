define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	'text!templates/profile.html'
], function($, _, Backbone, Semantic, ProfileTemplate){
	// They will not be accessible in the global scope
	var ProfileView = Backbone.View.extend({
		el: $('body'),
		template: _.template(ProfileTemplate),
		events: {
			'click p': 'displayPage'
		},
		initialize: function(){
			_.bindAll(this, 'render', 'displayPage');
			this.counter = 0;
		    this.render();
	    },
		render: function(){
			var data = {};
			var compiledTemplate = _.template(ProfileTemplate, data );
			// Append our compiled template to this Views "el"
			this.$el.append( compiledTemplate );
		},
	    displayPage: function(){
	    	this.counter++;
	    	console.log("hi")
	    }
	});
	return ProfileView;
});