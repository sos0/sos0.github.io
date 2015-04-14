define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	'text!templates/header.html'
], function($, _, Backbone, Semantic, headerTemplate){
	// They will not be accessible in the global scope
	var HeaderView = Backbone.View.extend({
		el: $('#header'),
		render: function(){
			var data = {};
			var compiledTemplate = _.template(headerTemplate, data );
			// Append our compiled template to this Views "el"
			this.$el.append(compiledTemplate);
		},
	});
	return HeaderView;
});