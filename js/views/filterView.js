var app = app || {};

app.FilterView = Parse.View.extend({
    template: _.template( $("#filter-template").html() ),
    events: {
       'click .filter_title' : 'toggleFilter',
       'change .checkboxes' : 'filterCategories',
       'click #icon_report' : 'filterCategories',
       'click #icon_conference' : 'filterCategories',
       'click #icon_website' : 'filterCategories'
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

    toggleFilter: function() {
        $(".checkboxes").toggle();
    },

    filterCategories: function(e) {
        var boxes = $(".checkboxes").children("input:checked");
        var i;
        var boxValues = [];
        for (i = 0; i < boxes.length; i++) {
            boxValues[i] = $(boxes[i]).attr("value");
        }
        app.pubSub.trigger("filter", boxValues);
    }
});
