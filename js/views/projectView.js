define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/project.html'
], function ($, _, Backbone, projectTemplate) {
	'use strict';

	var ProjectView = Backbone.View.extend({
		template: _.template(projectTemplate),
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
			$('proj-container').hide();
		},

		// Toggle the `"completed"` state of the model.
		clickHandler: function () {
			this.model.printDetails();
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}
	});

	return ProjectView;
});