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
        $(".checkboxes").hide();
    },

    render: function() {
        return this;
    },

    toggleFilter: function() {
        if ($(".checkboxes").is(":visible")) {
            $(".filter_tab").rotate(0);
        } else {
            $(".filter_tab").rotate(270);
        }

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
