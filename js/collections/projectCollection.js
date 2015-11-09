define([
    'underscore',
    'backbone',
    'models/projectModel'
], function (_, Backbone, Project) {
    'use strict';

    var ProjectCollection = Backbone.Collection.extend({
        model: Project
    });

    var noble = new Project({ name: "noblesteps", location: "fwd.us", description: "lorem ipsum", src: "noblesteps" });
    var waste = new Project({ name: "wastelands", location: "outside hacks", description: "lorem ipsum", src: "wastelands" });
    var droplet = new Project({ name: "liveabetes", location: "angelhack sf", description: "lorem ipsum", src: "liveabetes" });
    var weltgeist = new Project({ name: "weltgeist", location: "idea hack", description: "lorem ipsum", src: "weltgeist" });

    var currentProjects = new ProjectCollection([ noble, waste, droplet, weltgeist ]);

    return currentProjects;
});
