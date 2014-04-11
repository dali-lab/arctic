Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");

var app = app || {};

// Report
var Report = Parse.Object.extend ({
    className: "Report",
  defaults: {
    name: "report",
    category: "",
    country: "World"
  },

  initialize: function() {
    if (!this.get("name")) {
      this.set({"name": this.defaults.name});
    }
  }
});

