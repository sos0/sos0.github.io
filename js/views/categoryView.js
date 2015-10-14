define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/category.html'
], function ($, _, Backbone, categoryTemplate) {
	'use strict';

	var ProjectView = Backbone.View.extend({
		className:  'column',
		template: _.template(categoryTemplate),
		events: {
			'click #back-btn'	: 'displayCategories'
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		// Re-render the titles of the todo item.
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		displayCategories: function(){
			$('#category-container').show();
			$('#btn-container').hide();
			$('#proj-container').hide();
		}
	});

	return ProjectView;
});