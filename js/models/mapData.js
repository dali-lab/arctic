Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

var app = app || {};

// MapData
var MapData = Parse.Object.extend({
    className: "Datastore",
    defaults: {
        MapDiv: null, 
        MapData: null,
        OpenTab: null,
        LayerType: "reports"
    },

});
app.MapData = new MapData();
