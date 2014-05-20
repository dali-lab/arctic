Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

//define viewsd
var WebsiteView = Parse.View.extend({
    initialize: function() {
        //this.model.bind("change", this.render, this);
        //this.render();
    },

    render: function() {
        this.$el.empty();
        var name = this.model.get('name');
        var desc = this.model.get('description');
        var url = this.model.get('url');
        var image = this.model.get('image');
        var template = _.template( $("#website_template").html(), {"name": name, "description": desc, "url": url, "image": image } );
        this.$el.html(template);
        return this;
    }
});

var WebsiteListView = Parse.View.extend({
    el: $('#websites'),
    initialize: function() {
        var self = this;
        this.subviews = [];
        app.websitesCollection = new WebsiteCollection();
        app.websitesCollection.fetch({
          success: function(collection) {
            self.generateSubviews(collection);
            self.render();
          }
        });
        app.websitesCollection.getCategoriesList();
        app.pubSub.on("filterDropDown", this.filterCollection, this);
        app.pubSub.on("websiteCategories", this.initWebsiteFilter, this);
    },

    generateSubviews: function(collection) {
        this.subviews = [];
        for(var i = 0; i < collection.length; i++){
            var view = new WebsiteView();
            view.model = collection.at(i);
            this.subviews.push(view);
        }
    },

    render: function() {
        $("#websiteList").empty();
        for(var i = 0; i < this.subviews.length; i++){
            $("#websiteList").append(this.subviews[i].render().$el);
        }
        if (app.websiteFilter) {
            app.websiteFilter.delegateEvents();
        }
    },

    // Initialize the websites filter. Triggered by the websites collection.
    initWebsiteFilter: function(websiteCategories) {
        app.websiteFilter = new app.DropDownView({categories: websiteCategories, el: $("#websiteFilter")});
    },

    filterCollection: function(option) {
        if (option == "All") {
            this.generateSubviews(app.websitesCollection);
        } else {
            this.generateSubviews(app.websitesCollection.filterByCategory(option));
        }
            this.render();
    }
});
