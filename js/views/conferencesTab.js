Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

app.ConferencesTabView = Parse.View.extend({
    template: _.template( $("#conferences-tab-template").html() ),
    tagName: "div",
    events: {"click div.close": "close"},

    initialize: function(options) {
        _.extend(this, _.pick(options, "conferences"));
    },

    render: function() {
        this.$el.html(this.template({conferences: this.conferences.models}));
        return this;
    },

    close: function() {
        this.remove();
    }
});
