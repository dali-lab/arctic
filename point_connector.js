function addConnection(p1, p2) {
		L.polyline([p.coordinates, p2.coordinates], {color: 'red'}).addTo(map);
}

function addConnections(data) {
	for points in data {
		addConnection(p);
	}
}