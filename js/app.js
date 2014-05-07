// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {
    app.Router = new ArcticRouter(new AppView());
    Parse.history.start();
});
