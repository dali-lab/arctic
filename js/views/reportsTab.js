Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

app.ReportsTabView = Parse.View.extend({
    template: _.template( $("#reports-tab-template").html() ),
    tagName: "div",
    initialize: function(options){
        _.extend(this, _.pick(options, "reports"));
    },
    
    render: function() {
        this.$el.html(this.template({reports: this.reports.models}));
        return this
    },


});
