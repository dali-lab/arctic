var ArcticAdminRouter = Parse.Router.extend({
  routes: {
    "": "editConferences",
    "editConference/:id": "editConference",
    "editReports": "editReports",
    "editReport/:id": "editReport",
    "editWebsites": "editWebsites",
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

  editReports: function(){

  },

  editReport: function(id){

  },

  editWebsites: function(){

  },

  editAbout: function(){

  }
});

var router = new ArcticAdminRouter();
Parse.history.start();
