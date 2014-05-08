Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");



//Website Collection
var WebsiteCollection = Parse.Collection.extend({
  model: Website,
  query: new Parse.Query(Website),

  getCategoriesList: function() {
        var query = new Parse.Query(Website);
        query.find({
            success: function(results) {
                websiteCategories = [];
                results.forEach(function(website) {
                    var category = website.get("category");
                    if (jQuery.inArray(category, websiteCategories) < 0) {
                        websiteCategories.push(category);
                    }
                });
                app.pubSub.trigger("websiteCategories", websiteCategories);
            },
            error: function(error) {
                console.log("Failure");
            }
        });
    },

  filterByCategory: function(category) {
      return new WebsiteCollection(this.filter(function(website) {
          if (website.has("category")) {
              return website.get("category").toLowerCase() == category.toLowerCase();
          }
          return false;
      }));
  }
});
