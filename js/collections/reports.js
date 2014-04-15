Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

// Reports

var Reports = Parse.Collection.extend({

    model: Report,
    query: (new Parse.Query(Report)),

    filterByCategory: function(category) {
        return this.where({category: category});
    },

    filterByCountry: function(country) {
        return new Reports(this.filter(function(report){
            if (report.has("country")) {
                return report.get("country").toLowerCase() === country.toLowerCase();
            } else {
                return false;
            }
        }));
    },

    filterByDate: function(date) {
        return _.filter(this, function(num) {
            return(num > date);
        });
    },

});


