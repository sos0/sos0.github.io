define([
	'jquery',
	'underscore',
	'backbone',
	'collections/projectCollection',
	'views/projectView'
], function ($, _, Backbone, Projects, ProjectView) {
	'use strict';

	var ProjectCollectionView = Backbone.View.extend({
		el: '#proj-container',

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html('').show();
			$('#btn-container').show();
			Projects.each(function(item){
				this.renderItem(item);
			}, this);
			$('#proj-container > div > *').unwrap();
			$('#header > .wrapper > *').unwrap();
			$('#header > .container').removeClass('container-init');
		},

		renderItem: function(item){
			var itemView = new ProjectView({ model: item });
			this.$el.append(itemView.render().el);
		}
	});

	return ProjectCollectionView;
});