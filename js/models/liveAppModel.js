define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var LiveAppModel = Backbone.Model.extend({
        defaults: {
            name: "Not specified",
            description: "Not specified",
            url: "#",
            src: ""
        },
        initialize: function(){
            // console.log("project initialized.");
        },
        clear: function(){
            this.destroy();
            this.view.remove();
        }
    });

    return LiveAppModel;
});