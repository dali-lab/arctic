var app = app || {};
var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",
    "conference/:id": "getConference",
    "icon_conference!": "showConferences",
    "icon_forum!": "showForum",
    "icon_report!": "showReports",
    "report/:id": "getReport",
    "icon_website!": "showWebsites",
    "websites": "showWebsites"
  },

  showWebsites: function() {
    app.Compass.$el.children().find("#arrow").rotate(180);
    if (!app.Websites) {
      app.Websites = new WebsiteListView();
    }
    app.activeFilter = app.websiteFilter;
    app.Websites.render();
  },

  showAbout: function(){
    var aboutView = new AboutView();
  },

  getReport: function(id) {
    var detail = new ReportDetailView(id);
  },

  showReports: function() {
    app.Compass.$el.children().find("#arrow").rotate(90);
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    app.Map.render();
    app.Map.switchLayerTo("reports");
  },

  // Switches the map's popup layer to conferences
  showConferences: function() {
    app.Compass.$el.children().find("#arrow").rotate(270);
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    app.Map.render();
    app.Map.switchLayerTo("conferences");
  }
});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
