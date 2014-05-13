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
    },
});



// Basic Model for a Conference, defaults not really necessary because
// these models are initialized on the backend.
// TODO: Talk to Didi about consolidating our data models.
var Conference = Parse.Object.extend ({
    className: "Conference",
    defaults: {
        name: "conference",
        category: "",
        country: "World"
    },
});



//model for Website
var Website = Parse.Object.extend("Website", {
// Default attributes for the Website.
  defaults: {
    name: "empty name",
    url:"dali.cs.dartmouth.edu",
    description:"empty"
  },
});



///model for About
var About = Parse.Object.extend("About", {
// Default attributes for the todo.
  defaults: {
    content: "empty content"
  },
});


//model for partner
var Partner = Parse.Object.extend("Partner", {
// Default attributes for the todo.
  defaults: {
    name:"undefined",
  },
});