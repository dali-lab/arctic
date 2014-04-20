var app = app || {};

app.Filter = Parse.View.extend({
    template: _.template( $("#filter-template").html() ),
    events: {
       'change .filter_option' : 'filterCategories'
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
        var category = $(e.currentTarget).attr('value');
        app.pubSub.trigger("filter", category);
    }
});
