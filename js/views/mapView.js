Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");
var app = app || {};

// Views

app.MapView = Parse.View.extend({

    el: $("#map"),
    initialize: function() {
        var root = this;
        root.render();
    },
    
    render: function() {
        if (!this.el._leaflet) {

            var root = this;
            var currentYear = new Date().getYear() + 1900;
            root.setupMap(currentYear);
        }

        return this;
    },

    setupMap: function(year) {
        var root = this;
        root.el._leaflet = false;
        root.map = new L.map(this.el, {
            center: [10, -110],
            zoom: 1.5,
            maxZoom: 4
        });
        var getColor = function(feature) {
            c = feature.properties.MAP_COLOR;
    		return c == 6  ? '#800026' :
			       c == 5  ? '#BD0026' :
			       c == 4  ? '#E31A1C' :
			       c == 3  ? '#FC4E2A' :
			       c == 2  ? '#FD8D3C' :
			       c == 1  ? '#FEB24C' :
			       c == 0  ? '#FED976' :
			                '#FFEDA0';
			} 
        var getStyle = function(feature) {
            return {
                weight: .75,
                opacity: 1,
                stroke: true,
                color: "#0c1b31",
                fillOpacity: 1,
                fillColor: getColor(feature)
            }
        }
        
        var mouseOver = function(e) {
            var layer = e.target; 
            var props = layer.feature.properties;
            layer.setStyle({
                weight: 2,
                color: '#85dbf8',
                dashArray: ''
            });
        }
        var foo = "ste";


        var mouseOut = function(e, layer) {
        }

        var onEachFeature = function(feature, layer) {
            layer.on({
                mouseover: mouseOver,
                mouseout: mouseOut,
                //click: click
            });
        }

        var countriesLayer = L.geoJson(countryData, {
            style: getStyle,
            filter: function(feature, layer) {
                return (feature.properties.name != 'Antarctica')
            },
            onEachFeature: onEachFeature
        }).addTo(root.map);
        return this;
    }
});
