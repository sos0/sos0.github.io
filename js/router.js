define([
  'jquery',
  'underscore',
  'backbone',
  'views/headerView',
  'views/profileView',
], function($, _, Backbone, HeaderView, ProfileView){
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
    // app_router.on('showProjects', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      /*var projectListView = new ProjectListView();
      projectListView.render();
    });*/
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('showProfile', function(){
      var profileView = new ProfileView();
      profileView.render();
    });
    console.log("init routes");
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      var headerView = new HeaderView();
      alert("hi")
      headerView.render();
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});