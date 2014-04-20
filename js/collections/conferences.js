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

