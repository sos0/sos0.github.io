define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	'views/categoryCollectionView',
	'text!templates/header.html'
], function($, _, Backbone, Semantic, CategoryCollectionView, mainTemplate){
	'use strict';

	var AppView = Backbone.View.extend({
		el: '#header',
		template: _.template(mainTemplate),
		events: {
			'mouseover #avatar' : 'addShakeAvatar',
			'mouseout #avatar'  : 'removeShakeAvatar',
			'click #avatar'		: 'disableAvatar'
		},
		initialize: function(){
			this.$el.html(this.template);
		},
		render: function(){
			return this;
		},
		disableAvatar: function(){
			this.$el.off('click mouseover mouseout', '#avatar');
		},
		addShakeAvatar: function(e){
			$(e.currentTarget).addClass("animated shake");
		},
		removeShakeAvatar: function(e){
			$(e.currentTarget).removeClass("animated shake");
		}
	})

	return AppView;
});