Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

// Reports collection. Used to sync our data between the back-end
// and front-end.
//
// This Collection also allows contains three filter functions
// which return new functions containing elements that cause the filter
// function callback to return "true".

var Reports = Parse.Collection.extend({

    model: Report,
    query: (new Parse.Query(Report)),
    
    filterByCategory: function(category) {
        return new Reports(this.filter(function(report) {
            if (report.has("category")) {
                return report.get("category").toLowerCase() === category.toLowerCase();
            } else {
                return false;
            }
        }));
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
        return new Reports(this.filter(function(report) {
            if (report.has("date")) {
                return report.get("date").toLowerCase() > date;
            }
            return false;
        }));
    }

});


