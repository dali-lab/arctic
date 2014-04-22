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
    "click #icon_conference": "moveArrow",
    "click #icon_forum": "moveArrow",
    "click #icon_website": "moveArrow",
    "click #icon_report": "moveArrow"
  },

  moveArrow: function(e) {
    var clickedEl = $(e.currentTarget);
    var id = clickedEl.attr("id");

    //Top
    if (id == "icon_conference") {
       this.$el.children().find("#arrow").rotate(270);
    //Right
    } else if (id == "icon_forum") {
       this.$el.children().find("#arrow").rotate(0);
    //Down
    } else if (id == "icon_report") {
       this.$el.children().find("#arrow").rotate(90);
    //Left
    } else {
       this.$el.children().find("#arrow").rotate(180);
    }
  }
});
