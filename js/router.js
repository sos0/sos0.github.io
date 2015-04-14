define([
  'jquery',
  'underscore',
  'backbone',
  'semantic',
  'views/headerView',
  'views/profileView',
], function($, _, Backbone, Semantic, HeaderView, ProfileView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/profile': 'showProfile',
      // "":'defaultAction'

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('showProfile', function(){
      var profileView = new ProfileView();
      profileView.render();
    });
    console.log("init routes");
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      var headerView = new HeaderView();
      alert("hi");
      headerView.render();
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});