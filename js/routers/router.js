var app = app || {};
var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",
    "conferences": "showAllConferences",
    "conference/:id": "getConference",
    "reports": "showAllReports",
    "report/:id": "getReport",
    "websites": "showAllWebsites",
    "icon_conference!": "showConferences",
    "icon_forum!": "showForum",
    "icon_report!": "showReports",
    "icon_website!": "showAllWebsites"
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

    // Switches the map's popup layer to reports
  showReports: function() {
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    app.Map.render();
    app.Map.switchLayerTo("reports");
  },

  // Switches the map's popup layer to conferences
  showConferences: function() {
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    app.Map.render();
    app.Map.switchLayerTo("conferences");
  },
});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
