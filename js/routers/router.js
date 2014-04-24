var app = app || {};
var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",
    
    "one": "showOne",

    "two": "showReports",

    "three": "showConferences",

    "four": "showFour",

    "conferences": "showAllConferences",
    "conference/:id": "getConference",
    "reports": "showAllReports",
    "report/:id": "getReport",
    "websites": "showAllWebsites"
  },

  showAllWebsites: function(){
    var websiteListview = new WebsiteListView();
  },

  showAbout: function(){
    var aboutView = new AboutView();
  },

  showAllReports: function(){
    var reports = new ReportListView();
  },

  getReport: function(id) {
    var detail = new ReportDetailView(id);
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
  }
  
});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
