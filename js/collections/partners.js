Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

// Partners Collection
// Contains a partner name, url, and image
var PartnerCollection = Parse.Collection.extend({
    model: Partner,
    query: new Parse.Query(Partner)
});
