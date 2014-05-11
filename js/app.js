// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {
    //$(".checkbox").checkbox();
    app.Router = new ArcticRouter(new AppView());
    Parse.history.start();
});
