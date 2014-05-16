Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};
//default view
var editReportsView = Parse.View.extend({
    initialize: function() {
        this.render();
    },

    render: function() {
      this.el = $("#changable");
      this.el.empty();
      var template = _.template( $("#tab2_template").html())
      this.el.html(template);
      prepareTableForReport();
      var report = Parse.Object.extend("Report");
      var query = new Parse.Query(report);
      query.find({
        success: function(results) {
          $('#table_id').dataTable().fnClearTable();
          var giCount = 1;
          for (var i = 0; i < results.length; i++) {
            $('#table_id').dataTable().fnAddData( [
              '<span class="glyphicon glyphicon-remove" onclick="delete_Report(\'' + results[i].id + '\')"></span>',
              ""+results[i].get('name'),
              ""+results[i].get('author'),
              ""+results[i].get('country'),
              ""+results[i].get('publishedBy'),
              ""+results[i].get('category'),
              ""+results[i].get('description'),
              ""+results[i].get('url'),
              ""+results[i].createdAt,
              ""+results[i].updatedAt,
              "<td><span class='ops'>"+
              "<a  href='#editReport/"+results[i].id+"'><span class='glyphicon glyphicon-edit' data-toggle='modal'></span></a></td>"]);
          }
        }
      });
    }
});



var editReportView = Parse.View.extend({
    initialize: function(id) {
        //console.log(id);
        this.collection = new Reports();
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
                    var template = _.template( $("#edit_report").html(), 
                      { "name": object.get("name"),
                        "country": object.get("country"),
                        "author": object.get("author"),
                        "category": object.get("category"),
                        "description": object.get("description"),
                        "url": object.get("url"),
                        "publisher": object.get("publishedBy"),
                        "objectId": object.id,
                        "type": 1
                      });
                    this.el.html(template);
                    $('#myModal4').modal('show');
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


var addReportView = Parse.View.extend({
    initialize: function() {
        //console.log(id);
        this.render();
    },

    render: function() {
        this.el = $("#show_modal");
        var template = _.template( $("#edit_report").html(), {type:2});
        this.el.html(template);
        $('#myModal4').modal('show');
    }
});

function prepareTableForReport(){
    $("#table_id thead tr").first().empty();
    $("#table_id thead tr").first().append("<th></th>");
    $("#table_id thead tr").first().append("<th>name</th>");
    $("#table_id thead tr").first().append("<th>author</th>");
    $("#table_id thead tr").first().append("<th>country</th>");
    $("#table_id thead tr").first().append("<th>publisher</th>");
    $("#table_id thead tr").first().append("<th>category</th>");
    $("#table_id thead tr").first().append("<th>description</th>");
    $("#table_id thead tr").first().append("<th>url</th>");
    $("#table_id thead tr").first().append("<th>createdAt</th>");
    $("#table_id thead tr").first().append("<th>updatedAt</th>");
    $("#table_id thead tr").first().append("<th></th>");
}
