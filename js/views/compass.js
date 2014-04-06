var app = app || {};

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

  moveArrow: function(e) {
    var clickedEl = $(e.currentTarget);
    var id = clickedEl.attr("id");

    //Top
    if (id == "one") {
       this.$el.children().find("#arrow").rotate(270);
    //Right
    } else if (id == "two") {
       this.$el.children().find("#arrow").rotate(0);
    //Down
    } else if (id == "three") {
       this.$el.children().find("#arrow").rotate(90);
    //Left
    } else {
       this.$el.children().find("#arrow").rotate(180);
    }
  }
});
