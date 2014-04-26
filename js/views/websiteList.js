Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

//define viewsd
var WebsiteView = Parse.View.extend({
	initialize: function() {
        //this.model.bind("change", this.render, this);
        //this.render();
    },
    render: function() {
        // Just render my template
        this.$el.empty();
        var name = this.model.get('name');

        var desc = this.model.get('description');
        var url = this.model.get('url');
        var template = _.template( $("#website_template").html(), {"name": name, "description": desc} );
        console.log("rendering subview3...");
        this.$el.html(template);
        return this;
    }
});

var WebsiteListView = Parse.View.extend({
    el: $('#websites'),
    //collection : (new WebsiteCollection()),
	initialize: function() {
        this.$el = $('#websites');
        var self = this;
        this.collection = new WebsiteCollection();
        this.subviews = [];
        this.collection.on('change', this.render);
        this.collection.fetch({
          success: function(collection){
          	//console.log("getting new item...");
          	for(var i = 0; i < collection.length; i++){
          		var view = new WebsiteView();
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
        app.currentView = this;
        app.currentView.$el.show();
    }
});
