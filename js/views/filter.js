var app = app || {};

app.Filter = Parse.View.extend({
    template: _.template( $("#filter-template").html() ),
    events: {
       'change #filter_box' : 'filterCategories'
    },

    el: $("#filter"),
    initialize: function() {
        this.categories = ["test1", "test2"];
        var root = this;
        root.render();
    },

    render: function() {
        this.$el.html(this.template({categories: this.categories}));
        return this;
    },

    filterCategories: function(e) {
        var boxes = $("[type=checkbox]:checked");
        var i;
        var boxValues = [];
        for (i = 0; i < boxes.length; i++) {
            boxValues[i] = $(boxes[i]).attr("value");
        }
        app.pubSub.trigger("filter", boxValues);
    }
});
