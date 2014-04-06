var app = app || {},

app.Compass = Parse.View.extend({

  el: $("#compass"),
  initialize: function() {
    var root = this;
    root.render();
  },

  render: function() {
    return this;
  }
});
