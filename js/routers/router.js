var app = app || {};
var ArcticRouter = Parse.Router.extend({
  routes: {
    "": "showReports",
    "about_us": "showAbout",
    "conference/:id": "getConference",
    "icon_conference!": "showConferences",
    "conferences": "showConferences",
    "icon_forum!": "showForum",
    "icon_report!": "showReports",
    "reports": "showReports",
    "report/:id": "getReport",
    "icon_website!": "showWebsites",
    "websites": "showWebsites"
  },

  initialize: function(appView) {
      this.appView = appView;
      app.pubSub = _.extend({}, Parse.Events);
      app.Compass = new app.CompassView();
  },

  showForum: function() {
      app.Compass.$el.children().find("#arrow").rotate(0);
  },

  showWebsites: function() {
    app.Compass.$el.children().find("#arrow").rotate(180);
    if (!app.Websites) {
      app.Websites = new WebsiteListView();
    }
    //app.activeFilter = app.websiteFilter;
    this.appView.showView(app.Websites);
    $("#spin_navi").hide();
  },

  showAbout: function() {
    if (!app.About) {
        app.About = new app.AboutView();
    }
    this.appView.showView(app.About);
    $("#spin_navi").hide();
  },

  getReport: function(id) {
    if (!app.ReportDetail) {
        app.ReportDetail = new ReportDetailView(id);
    }
    this.appView.showView(app.ReportDetail);
    $("#spin_navi").hide();
    //var detail = new ReportDetailView(id);
  },

  showReports: function() {
    app.Compass.$el.children().find("#arrow").rotate(90);
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    this.appView.showView(app.Map);
    $("#spin_navi").show();
    app.Map.switchLayerTo("reports");
  },

  // Switches the map's popup layer to conferences
  showConferences: function() {
    app.Compass.$el.children().find("#arrow").rotate(270);
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    this.appView.showView(app.Map);
    $("#spin_navi").show();
    app.Map.switchLayerTo("conferences");
  }
});

//app.myArcticRouter = new ArcticRouter();
//Parse.history.start();
