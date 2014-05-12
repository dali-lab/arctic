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
    "reportsList": "showReportsList",
    "conferencesList": "showConferencesList",
    "icon_website!": "showWebsites",
    "websites": "showWebsites",
    "partners": "showPartners"
  },

  initialize: function(appView) {
      this.appView = appView;
      app.pubSub = _.extend({}, Parse.Events);
      app.Compass = new app.CompassView();
  },

  showPartners: function() {
    if (!app.Partners) {
        app.Partners = new app.PartnerView();
    }
    this.appView.showView(app.Partners);
    $("#spin_navi").hide();
  },

  showForum: function() {
      $("#arrow").rotate(0);
  },

  showWebsites: function() {
    $("#arrow").rotate(180);
    if (!app.Websites) {
      app.Websites = new WebsiteListView();
    }
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
    $("#arrow").rotate(90);
    if (!app.Map) {
        app.Map = new app.MapView();
    }
    this.appView.showView(app.Map);
    $("#spin_navi").show();
    app.Map.switchLayerTo("reports");
  },

  showReportsList: function() {
      app.ReportList = new ReportListView();
      this.appView.showView(app.ReportList);
      $("#spin_navi").hide();

  },

  showConferencesList: function() {
      app.ConferenceList = new ConferenceListView();
      this.appView.showView(app.ConferenceList);
      $("#spin_navi").hide();
  },
  // Switches the map's popup layer to conferences
  showConferences: function() {
    $("#arrow").rotate(270);
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
