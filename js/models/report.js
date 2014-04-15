Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");

var app = app || {};

// Report
var Report = Parse.Object.extend ({
    className: "Report",
    defaults: {
        name: "report",
        category: "",
        country: "World"
    },
});

