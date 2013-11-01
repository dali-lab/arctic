function addConnection(p) {
	if (p.connectTo != null)
		L.polyline([p.latlng, p.connectTo], {color: 'red'}).addTo(map);
}

function addConnections(data) {
	for points in data {
		addConnection(p);
	}
}