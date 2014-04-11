Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");

var app = app || {};

// MapData
var MapData = Parse.Object.extend({
    className: "Datastore",
    defaults: {
        MapDiv: null, 
        MapData: null,
        OpenTab: null 
    },

});
app.MapData = new MapData();
