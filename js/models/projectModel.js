define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ProjectModel = Backbone.Model.extend({
        defaults: {
            name: "Not specified",
            location: "Not specified",
            description: "Not specified",
            src: "Not specified"
        },
        initialize: function(){
            // console.log("project initialized.");
        },
        clear: function(){
            this.destroy();
            this.view.remove();
        }
    });

    return ProjectModel;
});