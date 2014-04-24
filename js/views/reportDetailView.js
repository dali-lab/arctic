Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

console.log("#include fhdjfk");
var ReportDetailView = Parse.View.extend({
	el: $('#detail'),
	initialize: function(id){
		this.rid = id;
	    // this.render();
	    this.collection = new Reports();
	    this.render();
	},
	render: function(){
		var self = this;
		$("#content").empty();
		console.log("clear content");
        //$("#content").append($("#fliternsearch").html());
        $("#content").append("<div id='detail'></div>");
	  	// var template = _.template( $('#detail_view').html());
	 	// this.$el.html(template);
	  	this.collection.fetch({
	      success: function(collection){
	      	console.log("success");
	      	for(var i = 0; i < collection.length; i++){
	      		if(collection.at(i).id === self.rid){
	      			console.log(get target);
	      			var model = collection.at(i);
	      			self.$el.empty();
			        var name = model.get('name');
			        var posttime = model.get('posttime');
			        var URL = model.get('url');
			        var publishedBy = model.get('publishedBy');
			        var issue = model.get('issue');
			        var introduction = model.get('introduction');
			        var template = _.template( $("#detail_view").html(), {
			        	"name": name, 
			        	"URL": URL,
			        	"publishedBy":publishedBy,
			        	"posttime":posttime,
			        	"issue":issue,
			        	"introduction":introduction
			        });
			        self.$el.html(template);
	      			break;
	      		}
	      	}
	      }
	    });
	}
});