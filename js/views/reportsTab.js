Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");
var app = app || {};

app.ReportsTabView = Parse.View.extend({
    template: _.template( $("#reports-tab-template").html() ),
    tagName: "div",
    initialize: function(options){
        _.extend(this, _.pick(options, "reports"));
        this.render();
    },
    
    render: function() {
        this.$el.html(this.template(this.reports.toJSON()));
    }
});
