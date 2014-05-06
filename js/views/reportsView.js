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
        var url = this.model.get('url');
        var author = this.model.get('author');
        var posttime = this.model.get('posttime');
        var objectId = "#report/" + this.model.id;
        var template = _.template( $("#report_template").html(), {
        	"name": name, 
        	"description": desc,
        	"author":author,
        	"posttime":posttime,
        	"url":url,
        	"objectId":objectId
        });
        this.$el.html(template);
        return this;
    }
});

var ReportListView = Parse.View.extend({
    el: $('#reports'),
    //collection : (new WebsiteCollection()),
    initialize: function() {
        var self = this;
        this.$el = $('#reports');
        this.collection = new Reports();
        this.subviews = [];
        this.collection.on('change', this.render);
        this.collection.fetch({
          success: function(collection){
            for(var i = 0; i < collection.length; i++){
                var view = new ReportView();
                view.model = collection.at(i);
                self.subviews.push(view);
            }
            self.render();
          }
        });
    },
    render: function() {
        this.resetCurrentView();
        this.$el.empty();
        for(var i = 0; i < this.subviews.length; i++){
            this.$el.append(this.subviews[i].render().$el);
        }
    },

    resetCurrentView: function() {
        app.currentView.$el.hide();
        $("#spin_navi").hide();
        $("#content").width("100%");
        app.currentView = this;
        app.currentView.$el.show();
    }
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
                debugger;
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
