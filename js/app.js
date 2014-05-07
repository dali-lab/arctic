// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {
    app.Router = new ArcticRouter(new AppView());
    Parse.history.start();
    //app.viewList = [];
    //app.activeFilter = null;
    //app.Compass = new app.CompassView();
    //app.Map = new app.MapView();
    //app.currentView = app.Map;
});
