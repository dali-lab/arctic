Parse.initialize("eipwUxxOCdl2C5VaTwC079iWpncdb0cjrgFDMEat", "k9YFVQUFHfXIHizc7pmnet7akcBom56wEAxouSOk");
var app = app || {};

// Views

app.MapView = Parse.View.extend({

    el: $("#map"),
    initialize: function() {
        app.pubSub.on("filter", this.filterCollection, this);

        app.ReportListCollection = app.MapData.activeCollection = app.MapData.reportsCollection = new Reports();
        app.MapData.reportsCollection.fetch({
            success: function(collection) {
                app.pubSub.trigger("reportsFetched");
            }
        });
        app.ConferenceListCollection = app.MapData.conferencesCollection = new Conferences();
        app.MapData.conferencesCollection.fetch({
            success: function(collection) {
                app.pubSub.trigger("conferencesFetched");
            }
        });
        app.MapData.reportsCollection.getCategoriesList();
        app.pubSub.on("reportCategories", this.initReportFilter, this);

        app.MapData.conferencesCollection.getCategoriesList();
        app.pubSub.on("conferenceCategories", this.initConferenceFilter, this);
        app.pubSub.on("reportsFetched", this.setupMap, this);
	    var waitColorMap = _.after(2, this.colorMap);
    	app.pubSub.on("reportsFetched", waitColorMap, this);
	    app.pubSub.on("conferencesFetched", waitColorMap, this);
    },
    colorMap: function() {
        var getColor = _.bind(this.getColor, this);
        app.MapData.MapLayer.setStyle( function(layer) {

            var color = getColor(layer);
            return {
                fillColor: color,
            };
        });
    },

    setActiveFilter: function(div) {
        if (div == "reports") {
            if (app.reportFilter) {
                app.activeFilter = app.reportFilter;
            }
            $("#conferenceFilter").hide();
            $("#reportFilter").show();
        } else if (div == "conferences") {
            if (app.conferenceFilter) {
                app.activeFilter = app.conferenceFilter;
            }
            $("#reportFilter").hide();
            $("#conferenceFilter").show();
        }
    },

    // Initialize the reports filter.  Triggered by the reports collection
    initReportFilter: function(reportCategories) {
        app.reportFilter = new app.FilterView({categories: reportCategories, el: $('#reportFilter')});
        if (app.MapData.LayerStyle == "reports") {
            app.activeFilter = app.reportFilter;
        }
    },

    // Initialize the conferences filter.  Triggered by the conferences collection
    initConferenceFilter: function(conferenceCategories) {
        app.conferenceFilter = new app.FilterView({categories: conferenceCategories, el: $('#conferenceFilter')});
        if (app.MapData.LayerStyle == "conferences") {
            app.activeFilter = app.conferenceFilter;
        }
    },

    hide: function() {
        this.$el.hide();
    },

    toggle: function() {
        this.$el.toggle();
    },

    // Filter a collection.  Triggered by the filter view
    filterCollection: function(boxValues) {
        if (app.activeFilter == app.reportFilter) {
            if (boxValues.length === 0) {
                app.ReportListCollection = app.MapData.activeCollection = app.MapData.reportsCollection;
            } else {
                app.ConferenceListCollection = app.MapData.activeCollection = app.MapData.reportsCollection.filterByCategory(boxValues);
            }
        } else if (app.activeFilter == app.conferenceFilter) {
            if (boxValues.length === 0) {
                app.ReportListCollection = app.MapData.activeCollection = app.MapData.conferencesCollection;
            } else {
                app.ConferenceListCollection = app.MapData.activeCollection = app.MapData.conferencesCollection.filterByCategory(boxValues);
            }
        }
        var getColor = _.bind(this.getColor, this);

    },

    render: function() {
        return this;
    },

    setupMap: function() {
        var root = this;
        app.MapData.MapDiv = new L.map(this.el, {
            center: [57.5, -10],
            zoom: 2,
	    scrollWheelZoom: false,
            maxZoom: 4,
            zoomControl: false
        });

        // Add our zoom control manually where we want to
        var zoomControl = L.control.zoom({
            position: 'bottomright'
        });
        app.MapData.MapDiv.addControl(zoomControl); 
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
	    if (feature.properties.NAME === 'Arctic') {
		return {
	            weight: .75,
                    opacity: 1,
                    stroke: true,
                    color: "#e88d8d",
                    fillColor: "#FFFFFA",
                    fillOpacity: .1,
		}
	    } else {
		return {
                    weight: .75,
                    opacity: 1,
                    stroke: true,
                    color: "#000000",
                    fillColor: "#FFFFFA",
                    fillOpacity: 1,
		}
	    }
        }

        // Create a modal on a country, using either a collection
        // passed to the function or this collection.
        var initPopup = function(country, filtered, remove) {
            var marker = new L.Marker(new L.LatLng(90, 90));
            if (app.MapData.LayerStyle === "reports") {
                app.MapData.OpenTab = new app.ReportsTabView({reports: filtered});
            } else {
                app.MapData.OpenTab = new app.ConferencesTabView({conferences: filtered});
            }
//	    app.MapData.MapDiv.removeLayer(app.MapData.OpenPopup);
	    app.MapData.OpenPopup = L.popup({className: app.MapData.LayerStyle.concat("-popup")})
	        .setLatLng(app.MapData.MapDiv.getCenter())
	        .setContent(app.MapData.OpenTab.render().el);   
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
            var layer = e.target;
            var props = layer.feature.properties;
            layer.setStyle({
                weight: .75,
                opacity: 1,
                stroke: true,
                color: "#000000"            
            });

        }

        var click = function(e) {            
	    var layer = e.target;
            var props = layer.feature.properties;
	    var filtered = app.MapData.activeCollection.filterByCountry(props.NAME);
	    if (app.MapData.LayerStyle === "reports") {
		app.ReportListCollection = filtered;
	    } else {
		app.ConferenceListCollection = filtered
	    }
	    app.MapData.MapDiv.openPopup(app.MapData.OpenPopup);
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
            onEachFeature: onEachFeature
        }).addTo(app.MapData.MapDiv);
        app.MapData.MapDiv.on('popupclose', this.removePopup);
	app.MapData.MapDiv.doubleClickZoom.disable();
        return this;
    },

    // Changes our active layer to whatever type string specifies
    // TODO: Possibly think of a more elegant way to track what type of tab / layer we
    // are displaying.
    switchLayerTo: function(type) {
        if (app.MapData.OpenPopup) {
            this.removePopup();
        }

        var root = this;
        app.MapData.LayerStyle = type;
        if (type == "reports") {
            app.ReportListCollection = app.MapData.activeCollection = app.MapData.reportsCollection;
            this.setActiveFilter(type);
        } else if (type == "conferences") {
            app.ConferenceListCollection = app.MapData.activeCollection = app.MapData.conferencesCollection;
            this.setActiveFilter(type);
        }

        if (app.activeFilter) {
            app.activeFilter.delegateEvents();
            app.activeFilter.filterCategories();
        }
	if (app.MapData.MapLayer) {
	    this.colorMap();
	}
        return app.MapData.activeCollection;
    },
    getColor: function(layer) {
        var collection = app.MapData.activeCollection;
        var name;
        for (var i = 0; i < collection.length; i++) {
            country = collection.at(i).get("country");
            if (country && layer.properties.NAME.toLowerCase() === country.toLowerCase() ) {
                if (app.MapData.LayerStyle === "reports") {
                    return "#e88d8d";
                } else {
                    return "#4c8d5a";
                }
            }
        }
        return "#FFFFFA";
    }, 

    removePopup : function() {
        //console.log('removed ' + app.MapData.OpenTab);
        app.MapData.MapDiv.closePopup();
    }
});
