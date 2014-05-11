//Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

// Reports collection. Used to sync our data between the back-end
// and front-end.
//
// This Collection also allows contains three filter functions
// which return new functions containing elements that cause the filter
// function callback to return "true".
var Reports = Parse.Collection.extend({

    model: Report,
    query: (new Parse.Query(Report)),

    getCategoriesList: function() {
        var query = new Parse.Query(Report);
        query.find({
            success: function(results) {
                reportCategories = [];
                results.forEach(function(report) {
                   var category = report.get("category");
                   if (jQuery.inArray(category, reportCategories) < 0) {
                        reportCategories.push(category);
                   }
                 });
                 app.pubSub.trigger("reportCategories", reportCategories);
            },
            error: function(error) {
                console.log("Failure");
            }
        });
    },

    filterByCategory: function(categories) {
        return new Reports(this.filter(function(report) {
            if (report.has("category")) {
                var l = categories.length;
                var i;
                for (i = 0; i < l; i++) {
                    if (report.get("category").toLowerCase() == categories[i].toLowerCase()) {
                        return true;
                    }
                }
            }
            return false;
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
