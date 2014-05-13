var ArcticAdminRouter = Parse.Router.extend({
  routes: {
    "": "editConferences",
    "editConference/:id": "editConference",
    "editReports": "editReports",
    "addConference": "addConference",
    "editReport/:id": "editReport",
    "addReport": "addReport",
    "editWebsites": "editWebsites",
    "editWebsite/:id": "editWebsite",
    "addWebsite": "addWebsite",
    "editPartners": "editPartners",
    "editPartner/:id": "editPartner",
    "addPartner": "addPartner",
    "editAbout": "editAbout"
  },

  initialize: function() {
    console.log("router initialized");
  },

  editConferences: function(){
    var editconferencesview = new editConferencesView();
  },

  editConference: function(id){
    var editconferenceview = new editConferenceView(id);
  },

  addConference: function(){
    var addconferenceview = new addConferenceView();
  },

  editReports: function(){
    var editreportsview = new editReportsView();
  },

  editReport: function(id){
    var editreportview = new editReportView(id);
  },

  addReport: function(){
    var addreport = new addReportView();
  },

  editWebsites: function(){
    var editwebsitesview = new editWebsitesView();
  },

  editWebsite: function(id){
    var editwebsiteview = new editWebsiteView(id);
  },

  addWebsite: function(){
    var addwebsiteview = new addWebsiteView();
    //console.log("begin to add website");
  },

  editPartners: function(){
    var editpartnersview = new editPartnersView();
  },

  editPartner: function(id){
    var editpartnersview = new editPartnerView(id);
  },

  addPartner: function(){
    var addpartnerview = new addPartnerView();
  },


  editAbout: function(){
    var editaboutview = new editAboutView();
  }
});

var router = new ArcticAdminRouter();
Parse.history.start();
