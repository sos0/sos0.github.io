define([
    'jquery',
    'underscore',
    'backbone',
    'views/projectCollectionView',
], function($, _, Backbone, ProjectCollectionView){
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'hacks': 'showProjects',
            'apps': 'showLiveApps',
            
            // "":'defaultAction'

            // Default
            '*actions': 'defaultAction'
        },
        initialize: function(){
            console.log('router on!');
        },
        showProjects: function(){
            $('#category-container').hide();
            new ProjectCollectionView();
        },
        initProject: function(proj){
            var view = new ProjectView({ model: proj });
            $('#proj-container').append(view.render().el);
        },
        showLiveApps: function(){
            // var profileView = new ProfileView();
            // profileView.render();
        },
        defaultAction: function(){
            // var headerView = new HeaderView();
            // alert("hi");
            // headerView.render();
        }
    });

    return AppRouter;
});