Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

app.AboutView = Parse.View.extend({
        //template: _.template($("#about-template").html()),

        //about: 0,
        el: $("#about"),
        initialize: function(){
            //var root = this;
            //root.render();
            //this.$el = $('#aboutDiv');
            //self.collection.on('change', this.render);
            //self.collection.fetch({
            //  success: function(collection){
            //    self.about = collection.at(0);
            //    self.render();
            //  }
            //});
        },

        render: function() {
            return this;
            //var content = this.about.get('content');
            //var template = _.template( $("#search_template").html(), {"content": content} );
            //var template = _.template( $("#about_template").html(), {"content": content} );
            // Load the compiled HTML into the Backbone "el"
            //this.$el.html(template);
        },
});
