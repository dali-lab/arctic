var app = app || {};
var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",
    "report/:id": "getReport",
    "icon_conference": "showConferences",
    "icon_forum": "showForum",
    "icon_report": "showReports",
    "icon_website": "showWebsite"
  },

  showForum: function() {
      console.log("Pushed forum");
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

  showWebsite: function() {
      console.log("Pushed website");
  },

  getReport: function(id) {
      /* Show detailed view of a report */
      console.log("You are trying to reach report " + id);
  }
});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
