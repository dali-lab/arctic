Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

var app = app || {};

//model for Website
var Website = Parse.Object.extend("Website", {
// Default attributes for the Website.
  defaults: {
    name: "empty name",
    url:"dali.cs.dartmouth.edu",
    description:"empty"
  },
});