// Initialize the map
const map = L.map('map').setView([17.6, 74], 8); // Set initial view to show both cities

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define the markers for Kolhapur and Pune
const kolhapurMarkers = [
    { coords: [16.6868981, 74.2245119], name: "ShivaMandir 1", data: "This temple is placed in the corner of a already isolated and 'sketchy' place." },
    { coords: [16.6878053, 74.2268129], name: "RadhaKrishna Mandir", data: "Old Maratha Architecture" },
    // Add more Kolhapur markers as needed
];

const puneMarkers = [
    { coords: [18.5204, 73.8567], name: "Shaniwar Wada", data: "Historical fortification in the city of Pune" },
    { coords: [18.5195, 73.8553], name: "Dagdusheth Halwai Ganapati Temple", data: "Popular Lord Ganesha temple" },
    // Add more Pune markers as needed
];

// Define single markers for each city
const kolhapurCityMarker = {
    coords: [16.7, 74.2],
    name: "Kolhapur",
    data: "Click to explore Kolhapur"
};

const puneCityMarker = {
    coords: [18.5204, 73.8567],
    name: "Pune",
    data: "Click to explore Pune"
};

let currentMarkers = [];
let cityMarkers = [];

function addMarkers(markers) {
    markers.forEach(markerData => {
        const marker = L.marker(markerData.coords).addTo(map);
        marker.on('click', () => zoomToMarkerAndShowOverlay(markerData, marker));
        currentMarkers.push(marker);
    });
}

function removePreviousMarkers() {
    currentMarkers.forEach(marker => map.removeLayer(marker));
    currentMarkers = [];
}

function addCityMarkers() {
    const kolhapurMarker = L.marker(kolhapurCityMarker.coords).addTo(map);
    kolhapurMarker.on('click', () => {
        map.setView(kolhapurCityMarker.coords, 13);
    });
    
    const puneMarker = L.marker(puneCityMarker.coords).addTo(map);
    puneMarker.on('click', () => {
        map.setView(puneCityMarker.coords, 13);
    });
    
    cityMarkers = [kolhapurMarker, puneMarker];
}

function removeCityMarkers() {
    cityMarkers.forEach(marker => map.removeLayer(marker));
    cityMarkers = [];
}

function updateMarkers() {
    const zoom = map.getZoom();
    const center = map.getCenter();
    
    removePreviousMarkers();
    removeCityMarkers();
    
    if (zoom >= 13) {
        // Check which city we're closer to
        const distToKolhapur = center.distanceTo(L.latLng(kolhapurCityMarker.coords));
        const distToPune = center.distanceTo(L.latLng(puneCityMarker.coords));
        
        if (distToKolhapur < distToPune) {
            addMarkers(kolhapurMarkers);
        } else {
            addMarkers(puneMarkers);
        }
    } else {
        addCityMarkers();
    }
}

function zoomToMarkerAndShowOverlay(markerData, marker) {
    map.setView(marker.getLatLng(), 18);
    
    // Update info overlay content
    document.getElementById('marker-title').textContent = markerData.name;
    document.getElementById('marker-info').textContent = markerData.data || 'No additional information available.';
    
    // Show info overlay
    document.getElementById('info-overlay').style.display = 'block';
}

// Listen for zoom events
map.on('zoomend', updateMarkers);
map.on('moveend', updateMarkers);

// Initial update
updateMarkers();

// Add event listeners for overlay buttons
document.getElementById('close-button').addEventListener('click', () => {
    document.getElementById('info-overlay').style.display = 'none';
});

document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('info-overlay').style.display = 'none';
    map.setView([17.6, 74], 8); // Reset to initial view
});
