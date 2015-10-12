define([
    'underscore',
    'backbone',
    'models/categoryModel'
], function (_, Backbone, Category) {
    'use strict';

    var CategoryCollection = Backbone.Collection.extend({
        model: Category
    });

    var art = new Category({ name: "art", color: "teal", icon: "paint-brush", description: "illustrations", url: 'http://fb.com/traveler.illustrator' });
    var books = new Category({ name: "books", color: "purple", icon: "bookmark", description: "goodreads", url: 'https://www.goodreads.com/sos0' });
    var code = new Category({ name: "code", color: "blue", icon: "github", description: "github", url: 'https://github.com/sos0' });
    var food = new Category({ name: "food", color: "green", icon: "cutlery", description: "blog/food porn", url: 'http://sos0.github.io/food-traveler-jekyll/' });
    var music = new Category({ name: "music", color: "red", icon: "music", description: "last.fm", url: 'http://www.last.fm/user/cookieplz' });
    var projects = new Category({ name: "projects", color: "yellow", icon: "code", description: "showcase" });

    var currentCategories = new CategoryCollection([ art, books, code, food, music, projects ]);

    return currentCategories;
});
