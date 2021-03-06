Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};
var ReportView = Parse.View.extend({
	initialize: function() {
        //this.model.bind("change", this.render, this);
        //this.render();
    },
    render: function() {
        // Just render my template
        //console.log("rendering subview...");
        this.$el.empty();
        var name = this.model.get('name');
        var desc = this.model.get('description');
	var category = this.model.get('category') || "All";
        var url = this.model.get('url');
        var author = this.model.get('author');
        var posttime = this.model.get('posttime');
        var objectId = "#report/" + this.model.id;
	if (this.model.has('image')) {
	    var image = this.model.get('image').url();
	} else {
	    var image = "imgs/placeholder.gif";
	}
        var template = _.template( $("#report_template").html(), {
            "name": name, 
            "description": desc,
	    "category": category,
            "author":author,
            "posttime":posttime,
            "url":url,
            "objectId":objectId,
	    "image": image
        });
        this.$el.html(template);
        return this;
    }
});

var ReportListView = Parse.View.extend({
    el: $('#reports'),
    //collection : (new WebsiteCollection()),
    initialize: function(reports) {
        var self = this;
        this.collection = app.ReportListCollection;
        this.subviews = [];
        app.ReportListCollection.on('change', this.render);
        for(var i = 0; i < app.ReportListCollection.length; i++){
            var view = new ReportView();
            view.model = app.ReportListCollection.at(i);
            self.subviews.push(view);
        }
        self.render();
    },
    render: function() {
        this.$el.empty();
        for(var i = 0; i < this.subviews.length; i++){
            this.$el.append(this.subviews[i].render().$el);
        }
    },

//    resetCurrentView: function() {
//        app.currentView.$el.hide();
//       $("#spin_navi").hide();
//        $("#content").width("100%");
//        app.currentView = this;
//        app.currentView.$el.show();
//    }
});

var ReportDetailView = Parse.View.extend({
        el: $('#detail'),
        initialize: function(id){
            this.rid = id;
            this.collection = new Reports();
        },

        render: function(){
            var self = this;
            this.collection.fetch({
              success: function(collection){
                var model = collection.get(self.rid);
                //for(var i = 0; i < collection.length; i++){
                    //if(collection.at(i).id === self.rid){
                        //var model = collection.at(i);
                        //self.$el.empty();
                        //var name = model.get('name');
                        //var posttime = model.get('posttime');
                        //var URL = model.get('url');
                        //var publishedBy = model.get('publishedBy');
                        //var issue = model.get('issue');
                        //var introduction = model.get('introduction');
                        //var template = _.template( $("#detail_view").html(), {
    			//                "name": name,
    			//        	"URL": URL,
    			//        	"publishedBy":publishedBy,
    			//        	"posttime":posttime,
    			//        	"issue":issue,
    			//        	"introduction":introduction
    			//        });
    			//        self.$el.html(template);
    	      	//		break;
    	      	//	}
    	      var template = _.template( $("#detail_view").html(), {
    			"name": model.get("name"),
    			"URL": model.get("url"),
    			"publishedBy":model.get("publishedBy"),
    			"posttime":model.get("posttime"),
    			"issue":model.get("issue"),
    			"introduction":model.get("introduction")
    		});
    		self.$el.html(template);	
            }
          });
        }
});
