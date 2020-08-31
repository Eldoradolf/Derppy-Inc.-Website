var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 22, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(59.72560,17.80164),18);
	map.addLayer(osm);
	
	
	var geojsonFeature = {
		"type": "Feature",
		"properties": {
			"name": "Coors Field",
			"amenity": "Baseball Stadium",
			"popupContent": "This is where the Rockies play!"
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-104.99404, 39.75621]
		}
	};

	function onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?
		if (feature.properties && feature.properties.namn) {
			layer.bindPopup(feature.properties.meddelande);
		}
	}

	var geojsonFeatures = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 1, "namn": "supermonstret", "poang": 2, "meddelande": "grattis" }, "geometry": { "type": "Point", "coordinates": [ 17.802214508766578, 59.725624235184817 ] } },
{ "type": "Feature", "properties": { "id": 3, "namn": "superboll", "poang": 5, "meddelande": "tjoho" }, "geometry": { "type": "Point", "coordinates": [ 17.801567144056918, 59.725881568109266 ] } },
{ "type": "Feature", "properties": { "id": 2, "namn": "tarsan", "poang": 8, "meddelande": "myket poäng va" }, "geometry": { "type": "Point", "coordinates": [ 17.801892999141288, 59.725855726964191 ] } },
{ "type": "Feature", "properties": { "id": 4, "namn": "per päron", "poang": 3, "meddelande": "haha" }, "geometry": { "type": "Point", "coordinates": [ 17.801103990481931, 59.726163973607576 ] } },
{ "type": "Feature", "properties": { "id": 5, "namn": "godismonstret", "poang": 6, "meddelande": "ätt inte så myket godis" }, "geometry": { "type": "Point", "coordinates": [ 17.802292080087323, 59.725399812049922 ] } },
{ "type": "Feature", "properties": { "id": 7, "namn": "mammo", "poang": 6, "meddelande": "äiska mamma" }, "geometry": { "type": "Point", "coordinates": [ 17.801640369918573, 59.725324133264358 ] } },
{ "type": "Feature", "properties": { "id": 8, "namn": "pappo", "poang": 6, "meddelande": "jila pappa" }, "geometry": { "type": "Point", "coordinates": [ 17.801622063453159, 59.725619464140692 ] } },
{ "type": "Feature", "properties": { "id": 9, "namn": "kakmonstret", "poang": 4, "meddelande": "got med kaka" }, "geometry": { "type": "Point", "coordinates": [ 17.802784524006967, 59.725166314758233 ] } }
]

	};

	L.geoJson(geojsonFeatures, {
		onEachFeature: onEachFeature
	}).addTo(map);	
	
}
