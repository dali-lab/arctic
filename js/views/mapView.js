Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

// Views

app.MapView = Parse.View.extend({
    
    el: $("#map"),
    initialize: function() {
        var root = this;
        root.collection = new Reports();
        root.collection.fetch();
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
        app.MapData.MapDiv = new L.map(this.el, {
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

        // Create a modal on a country, using either a collection
        // passed to the function or this collection.
        var initPopup = function(country, filtered, type) {
            var marker = new L.Marker(new L.LatLng(90, 90));
            if (type === "report") {
                app.MapData.OpenTab = new app.ReportsTabView({reports: filtered});
            } else {
                app.MapData.OpenTab = new app.ConferencesTabView({conferences: filtered});
            }
            country.bindPopup(app.MapData.OpenTab.render().el);
           
        }

        var removePopup = function() {
            console.log('removed ' + app.MapData.OpenTab);
            app.MapData.OpenTab.close();
        }

        var mouseOver = function(e) {
            var layer = e.target; 
            var props = layer.feature.properties;
            layer.setStyle({
                weight: 2,
                color: '#85dbf8',
                dashArray: ''
            });
            initPopup(layer, root.collection.filterByCountry(props.NAME), app.MapData.LayerType);
        }

        var mouseOut = function(e) {
            app.MapData.MapLayer.resetStyle(e.target);
        }

        

        var click = function(e) {
            var layer = e.target;
            var props = layer.feature.properties;
        }

        

        var onEachFeature = function(feature, layer) {
            layer.on({
                mouseover: mouseOver,
                mouseout: mouseOut,
                click: click
            });
        }

        app.MapData.MapLayer = L.geoJson(countryData, {
            style: getStyle,
            filter: function(feature, layer) {
                return (feature.properties.name != 'Antarctica')
            },
            onEachFeature: onEachFeature
        }).addTo(app.MapData.MapDiv);
        return this;

        app.MapData.MapDiv.on('popupclose', removePopup);
    }
});
