var app = app || {};
var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",
    "report/:id": "getReport",
    "one": "showOne",

    "two": "showReports",

    "three": "showConferences",

    "four": "showFour"
  },

  showOne: function() {
    console.log("Pushed one");

    // Display Information about Conference on Map
  },
  
  // Switches the map's popup layer to reports
  showReports: function() {
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    app.Map.switchLayerTo("reports");   

  },

  // Switches the map's popup layer to conferences
  showConferences: function() {
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    app.Map.switchLayerTo("conferences");
  },

  showFour: function() {
      console.log("Pushed four");
  },
  
  getReport: function(id) {
      /* Show detailed view of a report */
      console.log("You are trying to reach report " + id);

  }

});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
