// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {
    app.Compass = new app.Compass();
    app.Filter = new app.Filter();
    app.Map = new app.MapView();
});
