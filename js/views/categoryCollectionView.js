define([
	'jquery',
	'underscore',
	'backbone',
	'collections/categoryCollection',
	'views/categoryView'
], function ($, _, Backbone, Categories, CategoryView) {
	'use strict';

	var CategoryCollectionView = Backbone.View.extend({
		el: '#category-container',

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html('');
			Categories.each(function(item){
				this.renderItem(item);
			}, this);
		},

		renderItem: function(item){
			var itemView = new CategoryView({ model: item });
			this.$el.append(itemView.render().el);
		}
	});

	return CategoryCollectionView;
});