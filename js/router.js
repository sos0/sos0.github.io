define([
    'jquery',
    'underscore',
    'backbone',
    'views/categoryCollectionView',
    'views/projectCollectionView',
    'views/liveAppCollectionView',
], function($, _, Backbone, CategoryCollectionView, ProjectCollectionView, LiveAppCollectionView){
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'categories': 'showCategories',
            'hacks': 'showProjects',
            'apps': 'showLiveApps',
            
            // "":'defaultAction'

            // Default
            '*actions': 'defaultAction'
        },
        initialize: function(){
            console.log('router on!');
        },
        showCategories: function(){
            $('#btn-container').hide();
            $('#proj-container').hide();
            new CategoryCollectionView();
            $('#header > .wrapper > *').unwrap();
            $('#header > .container').removeClass('container-init');
            this.disableAvatar();
        },
        showProjects: function(){
            $('#category-container').hide();
            new ProjectCollectionView();
        },
        showLiveApps: function(){
            $('#category-container').hide();
            new LiveAppCollectionView();
        },
        disableAvatar: function(){
            $('#avatar').off('mouseover mouseout', '#avatar');
        },
        defaultAction: function(){
            // var headerView = new HeaderView();
            // alert("hi");
            // headerView.render();
        }
    });

    return AppRouter;
});