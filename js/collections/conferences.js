Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

// Conferences collection. Used to sync our data between the back-end
// and front-end.
//
// This Collection also allows contains three filter functions
// which return new functions containing elements that cause the filter
// function callback to return "true".

var Conferences = Parse.Collection.extend({
    model: Conference,
    query: (new Parse.Query(Conference)),

    getCategoriesList: function() {
        var query = new Parse.Query(Conference);
        query.find({
            success: function(results) {
                conferenceCategories = [];
                results.forEach(function(conference) {
                    var category = conference.get("category");
                    if (jQuery.inArray(category, conferenceCategories) < 0) {
                        conferenceCategories.push(category);
                    }
                });
                app.pubSub.trigger("conferenceCategories", conferenceCategories);
            },
            error: function(error) {
                console.log("Failure");
            }
        });
    },

    filterByCategory: function(category) {
        return new Conferences(this.filter(function(conference) {
            if (conference.has("category")) {
                return conference.get("category").toLowerCase() === category.toLowerCase();
            } else {
                return false;
            }
        }));
    },

    
    filterByCountry: function(country) {
        return new Conferences(this.filter(function(conference){
            if (conference.has("country")) {
                return conference.get("country").toLowerCase() === country.toLowerCase();
            } else {
                return false;
            }
        }));
    },

    filterByDate: function(date) {
        return new Conferences(this.filter(function(conference) {
            if (conference.has("date")) {
                return conference.get("date").toLowerCase() > date;
            }
            return false;
        }));
    }
});

