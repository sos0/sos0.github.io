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
        printDetails: function(){
            console.log(this);
        }
    });

    return CategoryModel;
});