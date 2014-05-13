Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

//default view
var editAboutView = Parse.View.extend({
    initialize: function() {
        this.render();
    },

    render: function() {
      var about = Parse.Object.extend("About");
      var query = new Parse.Query(about);
      query.find({
        success: function(results) {
          this.el = $("#changable");
          this.el.empty();
          var result = results[0];
          //debugger;
          var template = _.template( $("#tab5_template").html(), {"content": result.get("content"),"objectId": result.id});
          this.el.html(template);
        }
      });
    }
});

