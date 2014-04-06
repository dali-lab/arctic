// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {
    $("#arrow").rotate({
        bind: {
            mouseover: function() {
                $(this).rotate({animateTo: 180})
            },

            mouseout: function() {
                $(this).rotate({animateTo: 0})
            }
        }
    });
    new app.MapView();
});
