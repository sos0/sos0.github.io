define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	'collections/projectCollection',
	'collections/categoryCollection',
	'views/projectView',
	'views/categoryView',
	'text!templates/header.html'
], function($, _, Backbone, Semantic, Projects, Categories, ProjectView, CategoryView, mainTemplate, Router){
	'use strict';

	var AppView = Backbone.View.extend({
		el: '#header',
		template: _.template(mainTemplate),
		events: {
			'mouseover #avatar' : 'addShakeAvatar',
			'mouseout #avatar'  : 'removeShakeAvatar',
			'click #avatar'		: 'initPage'
		},
		initialize: function(){
			this.$el.html(this.template);

			// this.listenTo(Categories, 'all', this.render);
		},
		render: function(){
			// Append our compiled template to this Views "el"
			return this;
		},
		initPage: function(){
			this.$currentContainer = $('#category-container');
			this.$currentContainer.html('');
			Categories.each(this.initCategory, this);
			$('#header > .wrapper > *').unwrap();
			$('#header > .container').removeClass('container-init');
			this.disableAvatar();
		},
		initProjectPage: function(){
			this.$currentContainer = $('#proj-container');
			this.$currentContainer.html('');
			Projects.each(this.initProject, this);
			$('#proj-container > .column > *').unwrap();
			$('#header > .wrapper > *').unwrap();
			$('#header > .container').removeClass('container-init');
			// this.disableAvatar();
		},
		initCategory: function(category){
			var view = new CategoryView({ model: category });
			this.$currentContainer.append(view.render().el);
		},
		initProject: function(proj){
			var view = new ProjectView({ model: proj });
			this.$currentContainer.append(view.render().el);
		},
		disableAvatar: function(){
			this.$el.off('click mouseover mouseout', '#avatar');
			return false;
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