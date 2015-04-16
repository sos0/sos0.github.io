define([
    'jquery',
    'underscore',
    'backbone',
    'semantic'
], function($, _, Backbone, Semantic){
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'profile': 'showProfile',
            // "":'defaultAction'

            // Default
            '*actions': 'defaultAction'
        },
        showProfile: function(){
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