var Parse = require('parse').Parse;
Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");

// Views

var DetailsView = Parse.View.extend({
  tagname: "div",

  template: _.template($('#details-template').html()),

  events: {
