let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 8
    });
}

function getMapCoordinates() {
    const bounds = map.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    const startLatitude = ne.lat();
    const startLongitude = sw.lng();
    const endLatitude = sw.lat();
    const endLongitude = ne.lng();

    console.log('Start Location:');
    console.log('Latitude: ' + startLatitude);
    console.log('Longitude: ' + startLongitude);

    console.log('End Location:');
    console.log('Latitude: ' + endLatitude);
    console.log('Longitude: ' + endLongitude);
}

function initMap() {
    // ... (same as above)

    // Add an event listener to call initMap when the API is loaded.
    google.maps.event.addDomListener(window, 'load', initMap);
}

initMap()
