define([
    'underscore',
    'backbone',
    'models/liveAppModel'
], function (_, Backbone, LiveApp) {
    'use strict';

    var ProjectCollection = Backbone.Collection.extend({
        model: LiveApp
    });

    var riot = new LiveApp({ name: "ap is op", description: "Riot API Challenge 2.0", url: "https://protopizza.github.io/ApIsOp/", src: "riot" });

    var currentProjects = new ProjectCollection([ riot ]);

    return currentProjects;
});
