var Parse = require('parse').Parse;
Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");

// Collections

// Reports

var Reports = Parse.Collection.extend({

  model: Report,

  filterByCategory: function(category) {
    return this.where({category: category});
  },

  filterByCountry: function(country) {
    return this.where({country: country});
  },

  filterByDate: function(date) {
    return _.filter(this, function(num) {
      return(num > date);
    });
  },
});


  
