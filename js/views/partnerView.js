var app = app || {};

app.PartnerView = Parse.View.extend({
    template: _.template( $("#partner-template").html() ),

    el: $("#partners"),
    initialize: function() {
        var self = this;
        this.collection = new PartnerCollection();
        this.collection.fetch({
            success: function(collection) {
                self.$el.html(self.template({partners: collection}));
                self.render();
            }
        });
    },

    render: function() {
        return this;
    }
});
