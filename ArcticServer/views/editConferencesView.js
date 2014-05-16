Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

//default view
var editConferencesView = Parse.View.extend({
    initialize: function() {
        //console.log("in editConferencesView");
        this.render();
    },

    render: function() {
      this.el = $("#changable");
      this.el.empty();
      var template = _.template( $("#tab1_template").html());
      this.el.html(template);
      prepareTableForConference();
      var Conference = Parse.Object.extend("Conference");
      var query = new Parse.Query(Conference);
      query.find({
        success: function(results) {
          var giCount = 1;
          $('#table_id').dataTable().fnClearTable();
          for (var i = 0; i < results.length; i++) {
            var id = results[i].id;
            $('#table_id').dataTable().fnAddData( [
              '<span class="glyphicon glyphicon-remove" onclick="delete_Conference(\'' + id + '\')"></span>',
              ""+results[i].get('name'),
              ""+results[i].get('country'),
              ""+results[i].get('city'),
              ""+results[i].get('category'),
              ""+results[i].get('description'),
              ""+results[i].createdAt,
              ""+results[i].updatedAt,
              "<td><span class='ops'>"+
              "<a  href='#editConference/"+results[i].id+"'><span class='glyphicon glyphicon-edit' data-toggle='modal'></span></a></td>"]);
          }
        }
      });
    }
});



var editConferenceView = Parse.View.extend({
    initialize: function(id) {
        //console.log(id);
        this.collection = new Conferences();
        this.id = id;
        this.render();
    },

    render: function() {
      //console.log("begin to render");
      //console.log("begin to retrieve conference with id "+this.id);
      var self = this;
      this.collection.fetch({
        success: function() {
            //console.log(self.collection.length);
            self.collection.each(function(object) {
                if(object.id == self.id){
                    //console.log("found!");
                    this.el = $("#show_modal");
                    //console.log(object.get("name"));
                    //this.el.empty();
                    //console.log(object.get("name"));
                    var template = _.template( $("#edit_conference").html(), 
                      { "name": object.get("name"),
                        "country": object.get("country"),
                        "city": object.get("city"),
                        "category": object.get("category"),
                        "description": object.get("description"),
                        "url": object.get("url"),
                        "organization": object.get("organization"),
                        "objectId": object.id,
                        "type": 1,
                      });
                    //console.log(template);
                    this.el.html(template);
                    $('#myModal').modal('show');
                    return;
                }
            });
        },
        error: function(collection, error) {
            alert("no record found!");
        }
      });
    }
});



var addConferenceView = Parse.View.extend({
    initialize: function() {
        //console.log(id);
        this.render();
    },

    render: function() {
        this.el = $("#show_modal");
        var template = _.template( $("#edit_conference").html(), {type:2});
        this.el.html(template);
        $('#myModal').modal('show');
    }
});



function prepareTableForConference(){
    $("#table_id thead tr").first().empty();
    $("#table_id thead tr").first().append("<th></th>");
    $("#table_id thead tr").first().append("<th>name</th>");
    $("#table_id thead tr").first().append("<th>country</th>");
    $("#table_id thead tr").first().append("<th>city</th>");
    $("#table_id thead tr").first().append("<th>category</th>");
    $("#table_id thead tr").first().append("<th>description</th>");
    $("#table_id thead tr").first().append("<th>createdAt</th>");
    $("#table_id thead tr").first().append("<th>updatedAt</th>");
    $("#table_id thead tr").first().append("<th></th>");
}
