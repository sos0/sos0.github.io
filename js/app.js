define([
	// These are path alias that we configured in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	'collections/projectCollection',
	'views/projectView',
	'text!templates/header.html'
], function($, _, Backbone, Semantic, Projects, ProjectView, mainTemplate, Router){
	'use strict';

	var AppView = Backbone.View.extend({
		el: '#header',
		template: _.template(mainTemplate),
		events: {
			'mouseover #avatar' : 'addShakeAvatar',
			'mouseout #avatar'  : 'removeShakeAvatar',
			'click #avatar'		: 'initProjectButtons'
		},
		initialize: function(){
			this.$projGrid = $('#proj-container');
			this.$projGrid.html('');
			this.$el.html(this.template);

			this.listenTo(Projects, 'all', this.render);
		},
		render: function(){
			// Append our compiled template to this Views "el"
			return this;
		},
		initProject: function(proj){
			var view = new ProjectView({ model: proj });
			this.$projGrid.append(view.render().el);
		},
		initProjectButtons: function(e){
			$(e.currentTarget).removeClass("animated shake");
			$(e.currentTarget).addClass("slow-animated boxAround");
			$('#noblesteps-btn').show(750, function(){
				$('#wastelands-btn').show(750, function(){
					$('#weltgeist-btn').show(750, function(){
						$('#liveabetes-btn').show(750, function(){
							$('#header').remove();
							$(e.currentTarget).remove();
						});
					})
				})
			});

			this.$projGrid.empty();
			Projects.each(this.initProject, this);
			this.disableShakeAvatar();
		},
		disableShakeAvatar: function(){
			this.$el.off('mouseover mouseout', '#avatar');
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