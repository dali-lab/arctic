Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

//define viewsd
var editConferencesView = Parse.View.extend({
    initialize: function() {
        console.log("in editConferencesView");
        this.render();
    },

    render: function() {
      var Conference = Parse.Object.extend("Conference");
      var query = new Parse.Query(Conference);
      query.find({
        success: function(results) {
          var giCount = 1;
          for (var i = 0; i < results.length; i++) {
            $('#table_id').dataTable().fnAddData( [
              "<input type='checkbox' />",
              ""+results[i].get('name'),
              ""+results[i].get('abbr'),
              ""+results[i].get('city'),
              ""+results[i].get('category'),
              ""+results[i].get('description'),
              ""+results[i].createdAt,
              ""+results[i].updatedAt,
              "<td><span class='ops'>"+
              "<a  href='#editConference/"+results[i].id+"'><span class='glyphicon glyphicon-edit' data-toggle='modal'></span></a><span class='glyphicon glyphicon-remove' onclick='confirmDelete()'></span></span></td>"]);
          }
        }
      });
    }
});

var editConferenceView = Parse.View.extend({
    initialize: function(id) {
        console.log(id);
        this.render();
    },

    render: function() {
      console.log("begin to render");
      this.el = $("#show_modal");
      //this.el.empty();
      var template = _.template( $("#edit_conference").html());
      console.log(template);
      this.el.html(template);
      $('#myModal').modal('show');
    }
});
