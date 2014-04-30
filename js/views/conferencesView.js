Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};
var ConferenceView = Parse.View.extend({
    initialize: function() {
    },
    
    render: function() {
        this.$el.empty();
        var name = this.model.get('name');
        var desc = this.model.get('description');
        var template = _.template( $("#conference_template").html(), {
            "name": name,
            "description": desc
        });
        this.$el.html(template);
        return this;
    }
});

var ConferenceListView = Parse.View.extend({
    el: $('#reports'),
    initialize: function() {
        var self = this;
        this.$el = $('#conferences');
        this.collection = new Conferences();
        this.subviews = [];
        this.collection.on('change', this.render);
        this.collection.fetch({
            success: function(collection) {
                for (var i = 0; i < collection.length; i++) {
                    var view = new ConferenceView();
                    view.model = collection.at(i);
                    self.subviews.push(view);
                }
                self.render():
            }
        });
    },

    render: function() {
        this.resetCurrentView();
        this.$el.empty();
        for (var i = 0; i < this.subviews.length; i++) {
            this.$el.append(this.subviews[i].render().$el);
        }
    },

    resetCurrentView: function() {
        if (app.currentView != this) {
            app.currentView.$el.hide();
            $("#spin_navi").hide();
            app.currentView = this;
            app.currentView.$el.show();
        }
    }
});
