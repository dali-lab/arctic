var ArcticRouter = Parse.Router.extend({
  routes: {
    "about": "showAbout",

    "one": "showOne",

    "two": "showTwo",

    "three": "showThree",

    "four": "showFour"
  },

  showOne: function() {
    console.log("sup muthafuckaaaa");
  }
});

app.myArcticRouter = new ArcticRouter();
Parse.history.start();
