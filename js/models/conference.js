Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

var app = app || {};

// Basic Model for a Conference, defaults not really necessary because
// these models are initialized on the backend.
// TODO: Talk to Didi about consolidating our data models.
var Conference = Parse.Object.extend ({
    className: "Conference",
    defaults: {
        name: "conference",
        category: "",
        country: "World"
    }
});

