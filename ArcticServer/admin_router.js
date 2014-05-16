// var currentUser = null;
var ArcticAdminRouter = Backbone.Router.extend({
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
    "editAbout": "editAbout",
  },

  initialize: function() {
    console.log("router initialized");
  },

  editConferences: function(){
    if(!Parse.User.current()){
      login();
    }
    var editconferencesview = new editConferencesView();
  },

  editConference: function(id){
    if(!Parse.User.current()){
      login();
    }
    var editconferenceview = new editConferenceView(id);
  },

  addConference: function(){
    if(!Parse.User.current()){
      login();
    }
    var addconferenceview = new addConferenceView();
  },

  editReports: function(){
    if(!Parse.User.current()){
      login();
    }
    var editreportsview = new editReportsView();
  },

  editReport: function(id){
    if(!Parse.User.current()){
      login();
    }
    var editreportview = new editReportView(id);
  },

  addReport: function(){
    if(!Parse.User.current()){
      login();
    }
    var addreport = new addReportView();
  },

  editWebsites: function(){
    if(!Parse.User.current()){
      login();
    }
    var editwebsitesview = new editWebsitesView();
  },

  editWebsite: function(id){
    if(!Parse.User.current()){
      login();
    }
    var editwebsiteview = new editWebsiteView(id);
  },

  addWebsite: function(){
    if(!Parse.User.current()){
      login();
    }
    var addwebsiteview = new addWebsiteView();
    //console.log("begin to add website");
  },

  editPartners: function(){
    if(!Parse.User.current()){
      login();
    }
    var editpartnersview = new editPartnersView();
  },

  editPartner: function(id){
    if(!Parse.User.current()){
      login();
    }
    var editpartnersview = new editPartnerView(id);
  },

  addPartner: function(){
    if(!Parse.User.current()){
      login();
    }
    var addpartnerview = new addPartnerView();
  },


  editAbout: function(){
    if(!Parse.User.current()){
      login();
    }
    var editaboutview = new editAboutView();
  }
});

var router = new ArcticAdminRouter();
Backbone.history.start();
