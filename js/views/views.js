Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");

// Views

var MapView = Parse.View.extend({
  tagname: "div",

  template: _.template($('#map-template').html()),

  initialize: function() {
    var root = this;
    this.el.html("Hello World");
    var today = new Date();
    root.setupMap();
  },

  setupMap: function() {
    // Initialize the map with center location and zoom level.
	  var map = L.map('map', {
		  center: new L.LatLng(66, 0),
      zoom: 2,
      maxZoom: 8,
      minZoom: 0,
	  });
  }
});
