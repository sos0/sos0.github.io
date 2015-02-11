define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	'text!templates/header.html'
], function($, _, Backbone, Semantic, HeaderTemplate){
	// They will not be accessible in the global scope
	var HeaderView = Backbone.View.extend({
		el: $('#header'),
		template: _.template(HeaderTemplate),
		events: {
			'click img#avatar': 'displayPage'
		},
		initialize: function(){
			_.bindAll(this, 'render', 'displayPage');
			this.counter = 0;
		    this.render();
	    },
		render: function(){
			var data = {};
			var compiledTemplate = _.template(HeaderTemplate, data );
			// Append our compiled template to this Views "el"
			this.$el.append(compiledTemplate);
			return this;
		},
	    displayPage: function(){
	    	this.counter++;
	    	console.log("hi")
	    }
	});
	return HeaderView;
});