var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",
    "report/:id": "getReport",
    "one": "showOne",

    "two": "showTwo",

    "three": "showThree",

    "four": "showFour"
  },

  showOne: function() {
    console.log("Pushed one");

    // Display Information about Conference on Map
  },

  showTwo: function() {
    console.log("Pushed two");

    //Go to Forum View

  },

  showThree: function() {
      console.log("Pushed three");
  },

  showFour: function() {
      console.log("Pushed four");
  },
  
  getReport: function(id) {
      /* Show detailed view of a report */
      console.log("You are trying to reach report " + id);

  }

});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
