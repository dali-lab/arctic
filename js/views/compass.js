var app = app || {},

app.Compass = Parse.View.extend({

  el: $("#spin_navi"),
  initialize: function() {
    var root = this;
    root.render();
  },

  render: function() {
    return this;
  },

  events: {
    "click li#one": "moveArrow",
    "click li#two": "moveArrow",
    "click li#three": "moveArrow",
    "click li#four": "moveArrow"
  },

  moveArrow: function(ev) {
    var clickedEl = $(e.currentTarget);
    var id = clickedEl.attr("id");

    //Top
    if (id == "one") {

    //Right
    } else if (id == "two") {

    //Down
    } else if (id == "three") {

    //Left
    } else {

    }
  }
});
