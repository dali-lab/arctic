// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {
    app.Map = new app.MapView();
    new app.Compass();
});
