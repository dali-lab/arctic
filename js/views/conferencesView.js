Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};
var ConferenceView = Parse.View.extend({

    initialize: function() {
    },

    render: function() {
        this.$el.empty();
        var name = this.model.get('name');
        var desc = this.model.get('description');
        var category = this.model.get('category') || "All";
        var url = this.model.get('url');
        var posttime = this.model.get('posttime'); 
        if (this.model.has('image')) {
            var image = this.model.get('image');
        } else {
            var image = {
                url: function() {
                    return "imgs/placeholder.gif";
                }
            }
        }
        var template = _.template( $("#conference_template").html(), {
            "name": name,
            "description": desc,
            "image": image,
            "category": category,
            "url": url,
            "posttime": posttime
        });
        this.$el.html(template);
        return this;
    }
});

var ConferenceListView = Parse.View.extend({
    el: $('#conferences'),
    initialize: function(conferences) {
        var self = this;
        this.collection = app.ConferenceListCollection;
        this.subviews = [];
        app.ConferenceListCollection.on('change', this.render);
        for (var i = 0; i < app.ConferenceListCollection.length; i++) {
            var view = new ConferenceView();
            view.model = app.ConferenceListCollection.at(i);
            self.subviews.push(view);
        }
        self.render();
    },

    render: function() {
        this.$el.empty();
        for (var i = 0; i < this.subviews.length; i++) {
            this.$el.append(this.subviews[i].render().$el);
        }
    },

//    resetCurrentView: function() {
//       if (app.currentView != this) {
//           app.currentView.$el.hide();
//           $("#spin_navi").hide();
//           app.currentView = this;
//           app.currentView.$el.show();
//       }
//   }
});
