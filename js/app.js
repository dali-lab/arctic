// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {
    app.viewList = [];
    app.Compass = new app.Compass();
    app.Filter = new app.Filter();
    app.Map = new app.MapView();
    app.currentView = app.Map;
});
