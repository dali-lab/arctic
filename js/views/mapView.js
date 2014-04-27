Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

// Views

app.MapView = Parse.View.extend({
    
    // Bind this view to the div with id 'map' in the HTML
    el: $("#map"),
    // Render our View when we initialize the map view
    initialize: function() {
        app.pubSub = _.extend({}, Parse.Events);
        app.pubSub.on("filter", this.filterCollection, this);

        app.MapData.reportsCollection = new Reports();
        app.MapData.reportsCollection.fetch();
        app.MapData.conferencesCollection = new Conferences();
        app.MapData.conferencesCollection.fetch();

        app.MapData.reportsCollection.getCategoriesList();
        app.pubSub.on("reportCategories", this.initReportFilter, this);

        //app.MapData.conferencesCollection.getCategoriesList();
        //app.pubSub.on("conferenceCategories", this.initConferenceFilter, this);
        var root = this;
        root.render();
    },

    // Initialize the reports filter.  Triggered by the reports collection
    initReportFilter: function(reportCategories) {
        debugger;
        app.reportFilter = new app.FilterView();
    },

    hide: function() {
        this.$el.hide();
    },

    toggle: function() {
        this.$el.toggle();
    },

    // Filter a collection.  Triggered by the filter model
    filterCollection: function(boxValues) {
        if (app.MapData.LayerType == "report") {
            if (boxValues.length === 0) {
                app.MapData.activeCollection = app.MapData.reportsCollection;
            } else {
                app.MapData.activeCollection = app.MapData.reportsCollection.filterByCategory(boxValues);
            }
        } else {
            if (boxValues.length === 0) {
                app.MapData.activeCollection = app.MapData.conferencesCollection;
            } else {
                app.MapData.activeCollection = app.MapData.conferencesCollection.filterByCategory(boxValues);
            }
        }
    },

    // Render the map view. This function is small because most of the map work is being done in setupMap.
    render: function() {
        if (!this.el._leaflet) {
            var root = this;
            root.setupMap();
        }
        return this;
    },
    
    setupMap: function() {
        var root = this;
        root.el._leaflet = false;
        app.MapData.MapDiv = new L.map(this.el, {
            center: [10, -110],
            zoom: 2,
            maxZoom: 4
        });
        app.MapData.activeCollection = app.MapData.reportsCollection;
        app.MapData.LayerType = "report";
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
                color: "#000000",
                fillColor: "#FFFFFA",
                fillOpacity: 1,
            }
        }

        // Create a modal on a country, using either a collection
        // passed to the function or this collection.
        var initPopup = function(country, filtered) {
            var marker = new L.Marker(new L.LatLng(90, 90));
            if (app.MapData.LayerStyle === "report") {
                app.MapData.OpenTab = new app.ReportsTabView({reports: filtered});
            } else {
                app.MapData.OpenTab = new app.ConferencesTabView({conferences: filtered});
            }
            country.bindPopup(app.MapData.OpenTab.render().el, {className: app.MapData.LayerStyle.concat("-popup")});
        }

        

        var mouseOver = function(e) {
            var layer = e.target; 
            var props = layer.feature.properties;
            layer.setStyle({
                weight: 2,
                color: '#85dbf8',
                dashArray: ''
            });
            initPopup(layer, app.MapData.activeCollection.filterByCountry(props.NAME));
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
        app.MapData.MapDiv.on('popupclose', this.removePopup);

        return this;
    },

    // Changes our active layer to whatever type string specifies
    // TODO: Possibly think of a more elegant way to track what type of tab / layer we
    // are displaying.
    switchLayerTo: function(type) {
        var root = this;
        app.MapData.LayerStyle = type;
        if (type === "reports") {
            app.MapData.activeCollection = app.MapData.reportsCollection;
        } else {
            app.MapData.activeCollection = app.MapData.conferencesCollection;
        }
        return app.MapData.activeCollection;
    },

    removePopup : function() {
        console.log('removed ' + app.MapData.OpenTab);
        app.MapData.OpenTab.close();
    }  
});
