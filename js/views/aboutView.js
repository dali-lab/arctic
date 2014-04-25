Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

var AboutView = Parse.View.extend({
	el: $("#aboutDiv"),
	about: 0,
	collection : (new AboutCollection()),
	initialize: function(){
	    var self = this;
	    $("#content").empty();
        // $("#content").append($("#fliternsearch").html());
        $("#content").append("<div id='aboutDiv'></div>");
        this.$el = $('#aboutDiv');
	    self.collection.on('change', this.render);
	    self.collection.fetch({
	      success: function(collection){
	        self.about = collection.at(0);
	        self.render();
	      }
	    });
	},
	render: function(){
	    var content = this.about.get('content');
	    //var template = _.template( $("#search_template").html(), {"content": content} );
	    var template = _.template( $("#about_template").html(), {"content": content} );
	    // Load the compiled HTML into the Backbone "el"
	    this.$el.html( template );
	}
});