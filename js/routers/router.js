var app = app || {};
var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",
    "conference/:id": "getConference",
    "report/:id": "getReport",
    "websites": "showAllWebsites",
    "icon_conference!": "showConferences",
    "icon_forum!": "showForum",
    "icon_report!": "showReports",
    "icon_website!": "showAllWebsites"
  },

  showAllWebsites: function() {
    if (!app.Websites) {
      app.Websites = new WebsiteListView();
    }
    app.Websites.render();
    //var websiteListview = new WebsiteListView();
  },

  showAbout: function(){
    var aboutView = new AboutView();
  },

  showAllReports: function(){
    if (!app.Reports) {
      app.Reports = new ReportListView();
    }
    app.Reports.render();
    //var reports = new ReportListView();
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
