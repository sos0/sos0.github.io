define([
	'jquery',
	'underscore',
	'backbone',
	'collections/liveAppCollection',
	'views/liveAppView'
], function ($, _, Backbone, LiveApps, LiveAppView) {
	'use strict';

	var liveAppCollectionView = Backbone.View.extend({
		el: '#proj-container',

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html('').show();
			$('#btn-container').show();
			LiveApps.each(function(item){
				this.renderItem(item);
			}, this);
			$('#proj-container > div > *').unwrap();
			$('#header > .wrapper > *').unwrap();
			$('#header > .container').removeClass('container-init');
		},

		renderItem: function(item){
			var itemView = new LiveAppView({ model: item });
			this.$el.append(itemView.render().el);
		}
	});

	return liveAppCollectionView;
});