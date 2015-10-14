define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CategoryModel = Backbone.Model.extend({
        defaults: {
            name: '',
            color: '',
            url: '#'
        },
        initialize: function(){
            // console.log("project initialized.");
        },
        clear: function(){
            this.destroy();
            this.view.remove();
        }
    });

    return CategoryModel;
});