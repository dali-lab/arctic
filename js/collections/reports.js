Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");

// Reports

var Reports = Parse.Collection.extend({

    model: Report,
    query: (new Parse.Query(Report)),
    filterByCategory: function(category) {
        return this.where({category: category});
    },

    filterByCountry: function(country) {
        return new Reports(this.filter(function(report){
            return report.get("country") == country;
        }));
    },

    filterByDate: function(date) {
        return _.filter(this, function(num) {
            return(num > date);
        });
    },

});


