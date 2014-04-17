var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",
    "report/:id": "getReport",
    "icon_conference": "showConference",
    "icon_forum": "showRorum",
    "icon_report": "showReport",
    "icon_website": "showWebsite"
  },

  showReport: function() {
    console.log("Pushed report");

    // Display Information about Conference on Map
  },

  showConference: function() {
    console.log("Pushed conference");
    //Go to Forum View

  },

  showForum: function() {
      console.log("Pushed forum");
  },

  showWebsite: function() {
      console.log("Pushed website");
  },
  
  getReport: function(id) {
      /* Show detailed view of a report */
      console.log("You are trying to reach report " + id);

  }

});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
