define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	'text!templates/profile.html'
], function($, _, Backbone, Semantic, profileTemplate){
	// They will not be accessible in the global scope
	var ProfileView = Backbone.View.extend({
		el: $('body'),
		render: function(){
			var data = {};
			var compiledTemplate = _.template(profileTemplate, data );
			// Append our compiled template to this Views "el"
			this.$el.append( compiledTemplate );
		}
	});
	return ProfileView;
});