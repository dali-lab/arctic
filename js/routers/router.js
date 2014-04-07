var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",

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
    console.log("Pushed two");a

    //Go to Forum View
    

  },

  showThree: function() {
    console.log("Pushed three");
  },

  showFour: function() {
    console.log("Pushed four");
  }
});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
