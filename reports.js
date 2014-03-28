// var pointsData = {
// 	"type": "FeatureCollection", "features":  [    
// 	{
//         "type": "Feature",
//     	"properties": {
//     		"name": "United States",
//         },
//         "geometry": {
//     	   "type": "Point",
//     	   "coordinates": [-97, 38]
// 	   }
//     },

//     {
//         "type": "Feature",
//         "properties": {
//             "name": "Russia",
//         },
//         "geometry": {
//             "type": "Point",
//             "coordinates": [100, 60]
//         }
//     },

//     {
//         "type": "Feature",
//         "properties": {
//             "name": "Greenland",
//         },
//         "geometry": {
//             "type": "Point",
//             "coordinates": [40, 72]
//         }
//     }
//     ]
// }

var Parse = require('parse').Parse;
Parse.initialize("g9E0CvsnPFgymkq8FxTN0khh9FZ5sqbaqsoN6GfH", 
    "R83Wi2r7ndSyA3gFUDqk6f3tZ9RP1Sn7WO3L9q3G");

var Conference = Parse.Object.extend("Conference");
//query
var query = new Parse.Query(Conference);
query.limit(1000);
query.find({
  success: function(results) {
    res.send(results);
  },
  error: function(error) {
    res.send("failed");
  }
});