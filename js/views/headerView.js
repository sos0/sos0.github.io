define([
	'jquery',
	'backbone',
	'text!templates/header.html'
], function($, Backbone, headerTemplate){
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