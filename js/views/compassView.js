var app = app || {};

app.CompassView = Parse.View.extend({

  el: $("#spin_navi"),
  initialize: function() {
    var root = this;
    root.render();
  },

  render: function() {
    return this;
  }
});
