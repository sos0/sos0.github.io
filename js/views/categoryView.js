/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/projectCollection',
	'views/projectView',
	'text!templates/category.html'
], function ($, _, Backbone, Projects, ProjectView, categoryTemplate) {
	'use strict';

	var CategoryView = Backbone.View.extend({
		className: 'column',
		template: _.template(categoryTemplate),
		events: {
			'click'			 : 'navigate'
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		// Re-render the titles of the todo item.
		render: function () {
			$('#btn-container').hide();
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		// Toggle the `"completed"` state of the model.
		navigate: function () {
			var url = this.model.get('url');
			var name = this.model.get('name');
			if(url !== '#' ){
				window.open(url);
			}else{
				if(name == 'hacks'){
					this.initProjectPage();
				}
			}
		},
        initProjectPage: function(){
			$('#category-container').hide();
			$('#btn-container').show();
			$('#proj-container').show();
            this.$currentContainer = $('#proj-container');
            this.$currentContainer.html('');
            Projects.each(this.initProject, this);
            $('#proj-container > div > *').unwrap();
            $('#header > .wrapper > *').unwrap();
            $('#header > .container').removeClass('container-init');
            // this.disableAvatar();
        },
        initProject: function(proj){
            var view = new ProjectView({ model: proj });
            this.$currentContainer.append(view.render().el);
        },

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}
	});

	return CategoryView;
});