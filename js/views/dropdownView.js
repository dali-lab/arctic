var app = app || {};

app.DropDownView = Parse.View.extend({
    template: _.template( $("#dropdown-template").html() ),
    events: {
        'change #options': 'filterCategories'
    },

    initialize: function(options) {
        this.setElement(options.el);
        this.categories = options.categories;
        _.extend(this, _.pick(options));
        this.$el.html(this.template({categories: this.categories}));
    },

    render: function() {
        return this;
    },

    filterCategories: function(e) {
        var category = $("#options :selected").text();
        app.pubSub.trigger("filterDropDown", category);
    }
});


