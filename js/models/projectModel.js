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
            award: "Not specified"
        },
        initialize: function(){
            // console.log("project initialized.");
        },
        printDetails: function(){
            console.log(this);
        }
    });

    return ProjectModel;
});