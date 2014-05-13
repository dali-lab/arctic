var ArcticAdminRouter = Parse.Router.extend({
  routes: {
    "": "editConferences",
    "editConference/:id": "editConference",
    "editReports": "editReports",
    "addConference": "addConference",
    "editReport/:id": "editReport",
    "editWebsites": "editWebsites",
    "editWebsite/:id": "editWebsite",
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
    console.log("add conference");
  },

  editReports: function(){
    var editreportsview = new editReportsView();
    console.log("in editReports");
  },

  editReport: function(id){

  },

  editWebsites: function(){
    var editwebsitesview = new editWebsitesView();
  },

  editWebsite: function(id){
    var editwebsiteview = new editWebsiteView(id);
  },

  editAbout: function(){

  }
});

var router = new ArcticAdminRouter();
Parse.history.start();
