Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

//default view
var editPartnersView = Parse.View.extend({
    initialize: function() {
        this.render();
    },

    render: function() {
      this.el = $("#changable");
      this.el.empty();
      var template = _.template( $("#tab4_template").html())
      this.el.html(template);
      prepareTableForPartner();
      var partner = Parse.Object.extend("Partner");
      var query = new Parse.Query(partner);
      query.find({
        success: function(results) {
          $('#table_id').dataTable().fnClearTable();
          var giCount = 1;
          //console.log(results[0]);
          for (var i = 0; i < results.length; i++) {
            $('#table_id').dataTable().fnAddData( [
              '<span class="glyphicon glyphicon-remove" onclick="delete_Partner(\'' + results[i].id + '\')"></span>',
              ""+results[i].get('name'),
              ""+results[i].get('url'),
              ""+results[i].get('image').url(),
              ""+results[i].createdAt,
              ""+results[i].updatedAt,
              "<td><span class='ops'>"+
              "<a  href='#editPartner/"+results[i].id+"'><span class='glyphicon glyphicon-edit' data-toggle='modal'></span></a></td>"]);
          }
        }
      });
    }
});


var editPartnerView = Parse.View.extend({
    initialize: function(id) {
        //console.log(id);
        this.collection = new PartnerCollection();
        this.id = id;
        this.render();
    },

    render: function() {
      //console.log("begin to render");
      var self = this;
      this.collection.fetch({
        success: function() {
            //console.log(self.collection.length);
            self.collection.each(function(object) {
                if(object.id == self.id){
                    //console.log("found!");
                    this.el = $("#show_modal");
                    var template = _.template( $("#edit_partner").html(), 
                      { "name": object.get("name"),
                        "image": object.get("image").url(),
                        "url": object.get("url"),
                        "objectId": object.id,
                        "type": 1
                      });
                    this.el.html(template);
                    $('#myModal3').modal('show');
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


var addPartnerView = Parse.View.extend({
    initialize: function() {
        //console.log(id);
        this.render();
    },

    render: function() {
        this.el = $("#show_modal");
        var template = _.template( $("#edit_partner").html(), {type:2});
        this.el.html(template);
        $('#myModal3').modal('show');
    }
});

function prepareTableForPartner(){
    $("#table_id thead tr").first().empty();
    $("#table_id thead tr").first().append("<th></th>");
    $("#table_id thead tr").first().append("<th>name</th>");
    $("#table_id thead tr").first().append("<th>url</th>");
    $("#table_id thead tr").first().append("<th>image</th>");
    $("#table_id thead tr").first().append("<th>createdAt</th>");
    $("#table_id thead tr").first().append("<th>updatedAt</th>");
    $("#table_id thead tr").first().append("<th></th>");
}
