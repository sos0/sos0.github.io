/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/category.html'
], function ($, _, Backbone, categoryTemplate) {
	'use strict';

	var CategoryView = Backbone.View.extend({
		className: 'column',
		template: _.template(categoryTemplate),
		events: {
			'click .circular-btn':	'clickHandler',
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

		// Toggle the `"completed"` state of the model.
		clickHandler: function () {
			this.model.printDetails();
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}
	});

	return CategoryView;
});