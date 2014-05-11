Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

var app = app || {};
// Basic Model for a Report, defaults not really necessary because
// these models are initialized on the backend.
// TODO: Talk to Didi about consolidating our data models.
var Report = Parse.Object.extend ({
    className: "Report",
    defaults: {
        name: "report",
        category: "",
        country: "World",
        url:"dali.cs.dartmouth.edu",
        description:"empty",
        posttime:"not known",
        author:"not known",
        objectId:"null",
        published:""
    }
});

