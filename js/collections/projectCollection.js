define([
    'underscore',
    'backbone',
    'models/projectModel'
], function (_, Backbone, Project) {
    'use strict';

    var ProjectCollection = Backbone.Collection.extend({
        model: Project
    });

    var noble = new Project({ name: "noblesteps", location: "fwd.us", description: "lorem ipsum", award: "lorem ipsum" });
    var waste = new Project({ name: "wastelands", location: "outside hacks", description: "lorem ipsum", award: "lorem ipsum" });
    var droplet = new Project({ name: "liveabetes", location: "angelhack sf", description: "lorem ipsum", award: "lorem ipsum" });
    var weltgeist = new Project({ name: "weltgeist", location: "idea hack", description: "lorem ipsum", award: "lorem ipsum" });

    var currentProjects = new ProjectCollection([ noble, waste, droplet, weltgeist ]);

    return currentProjects;
});
