var Parse = require('parse').Parse;
Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");

var app = app || {};

// MapData
var MapData = Parse.Object.extend("Report") {
    defaults: {
        MapDiv: null, 
        MapData: null
        
    }
    initialize: function() {
    }
});

