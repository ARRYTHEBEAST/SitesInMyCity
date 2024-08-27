// Map initialization 
const map = L.map('map').setView([16.686875, 74.2272], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var timePeriods = ['Old', 'Recent', 'Ancient', 'Mideaval']

// Add your markers
var markersData = [
    {
        coords: [16.6868981, 74.2245119], name: "ShivaMandir 1",
        data: "This temple is placed in the corner of a already isolated and 'sketchy' place. This temple is mostly closed and only open on core festive days for the local shiva bhakts. With average aesthic value this place does not call for a detour just to visit it. "
        , categories: ['Temple', 'Recent', 'Architecture']
    },

    {
        coords: [16.6878053, 74.2268129], name: "RadhaKrishna Mandir Old Maratha Architecture",
        data: "This temple ", categories: ['Temple', 'Mideaval', 'Architecture', 'Religious']
    },

    { coords: [16.6876496, 74.2272880], name: "Padmavati Mandir", categories: ['Temple', 'Mideaval', 'Religious'] },

    { coords: [16.6880179, 74.2272511], name: "GajaGanesh",categories:['Temple', 'Recent'] },

    { coords: [16.6875259, 74.2285171], name: "Jayprabha Studio", categories:['Heritage', 'Old'] },

    { coords: [16.6840401, 74.2319141], name: "Renuka Mandir s.1840" },

    { coords: [16.692538, 74.224976], name: "Mirajkar Tikti" },

    { coords: [16.692193, 74.224434], name: "Nurshimha Mandir 1" },

    { coords: [16.6918619, 74.2243293], name: "Onkareshwar Mandir Southern Script(raja Bhoj?)", data: "this is data" },

    { coords: [16.6916495, 74.2307380], name: "Sathmari" },

    { coords: [16.690646, 74.229167], name: "Belbag Chowk" },

    { coords: [16.6923981, 74.2202060], name: "ardha shivaji putala" },

    { coords: [16.6929595, 74.2198519], name: "Brahmeshwar Park" },

    { coords: [16.6929733, 74.2182406], name: "Mahakali mandir 1" },

    { coords: [16.6944673, 74.2143604], name: "rankala tower" },

    { coords: [16.6994986, 74.2117278], name: "anugamini mandir" },

    { coords: [16.6966896, 74.2139182], name: "Old Washing Place (dhobi)" },

    { coords: [16.6999160, 74.1945288], name: "Laksheswar Mandir(waterfront)" },

    { coords: [16.7037394, 74.2177601], name: "sangramsinha gaikwad statue" },

    { coords: [16.7032927, 74.2177269], name: "gaikwad samadhi" },

    { coords: [16.7036107, 74.2182610], name: "maratha architecture (wooden work) temple?" },

    { coords: [16.717409, 74.1837], name: "Shingnapur Bridge" },

    { coords: [16.707178, 74.217496], name: "Shivaji Pul" },

    { coords: [16.69181, 74.214733], name: "Sandhya Math" },

    { coords: [16.691476, 74.214250], name: "Ancient Grinding Wheel (Chuna/Lime)" },

    { coords: [16.690777, 74.242741], name: "Shahunagar Shahu Maharaj" },

    { coords: [16.686661, 74.242467], name: "Pansare Statue" },

    { coords: [16.685677063690296, 74.24476721211819], name: "Jain Peace Fountain(not functional)" },

    { coords: [16.678112528032145, 74.25650613438248], name: "University Shivaji Maharaj Statue" },

    { coords: [16.68045203668232, 74.25650030391819], name: "Bhaurao Patil Statue" },

    { coords: [16.683335386532963, 74.25358169487988], name: "University Lake Point" },

    { coords: [16.695784408048777, 74.25683864460689], name: "Maratha Light Infantry, Kolhapur Command Entry" },

    { coords: [16.6993747349747, 74.25449822924905], name: "Tank, Fighter Jet, WarShip scale models" },

    { coords: [16.691389103423028, 74.24460943217142], name: "Bai Cha Putala, Mauli Putala" },

    { coords: [16.69368046074615, 74.236330895537], name: "Koteshwar Mandir, LakeView" },

    { coords: [16.68687874452764, 74.22941512409949], name: "Arya Samaj School, 1928" },

    { coords: [16.791012471115316, 74.19121417050346], name: "Pohale Caves" },

];

const [homeButton, aboutButton, mapButton] = document.querySelectorAll('.navbar button');
const referenceButton = document.querySelector('.references button');

const addButtonListener = (button, url) => {
    button.addEventListener('click', () => window.location.href = url);
};

addButtonListener(referenceButton, 'reference.html');
addButtonListener(aboutButton, 'about.html');
addButtonListener(homeButton, 'index.html');

const tileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

// Function to toggle map view and update localStorage
function toggleMapView() {
    if (map.hasLayer(tileLayer)) {
        map.removeLayer(tileLayer);
        mapButton.textContent = "Street View";
        localStorage.setItem('mapView', 'street');
    } else {
        tileLayer.addTo(map);
        mapButton.textContent = "Satellite View";
        localStorage.setItem('mapView', 'satellite');
    }
}

// Check localStorage and set initial map view
const savedMapView = localStorage.getItem('mapView');
if (savedMapView === 'satellite') {
    tileLayer.addTo(map);
    mapButton.textContent = "Satellite View";
} else {
    mapButton.textContent = "Street View";
}

// Add click event listener to toggle map view
mapButton.addEventListener('click', toggleMapView);

const markerNamesList = document.getElementById('markerNames');
const infoOverlay = document.getElementById('info-overlay');
const markerTitle = document.getElementById('marker-title');
const markerInfo = document.getElementById('marker-info');
const backButton = document.getElementById('back-button');
const closeButton = document.getElementById('close-button');

let currentMarker = null;

function zoomToMarkerAndShowOverlay(markerData, marker) {
    const zoomLevel = Math.max(map.getZoom(), 16);
    map.setView(markerData.coords, zoomLevel, { animate: true, duration: 1 });

    currentMarker = markerData.name;

    markerTitle.textContent = markerData.name;
    markerInfo.textContent = markerData.data || "No additional information available.";
    infoOverlay.style.display = 'block';

    const enlargedIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [35, 55],
        iconAnchor: [17, 55],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    });

    marker.setIcon(enlargedIcon);

    setTimeout(() => {
        marker.setIcon(L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            shadowSize: [41, 41],
            shadowAnchor: [12, 41]
        }));
    }, 500);
}

markersData.forEach(markerData => {
    const marker = L.marker(markerData.coords).addTo(map);
    marker.on('click', () => zoomToMarkerAndShowOverlay(markerData, marker));

    const listItem = document.createElement('li');
    listItem.textContent = markerData.name;
    markerNamesList.appendChild(listItem);

    listItem.addEventListener('click', () => zoomToMarkerAndShowOverlay(markerData, marker));
});

closeButton.addEventListener('click', () => infoOverlay.style.display = 'none');
backButton.addEventListener('click', () => infoOverlay.style.display = 'none');

document.getElementById('searchInput').addEventListener('input', e => {
    const searchQuery = e.target.value.toLowerCase();
    markerNamesList.innerHTML = '';

    markersData.forEach(markerData => {
        if (markerData.name.toLowerCase().includes(searchQuery)) {
            const listItem = document.createElement('li');
            listItem.textContent = markerData.name;
            listItem.addEventListener('click', () => zoomToMarkerAndShowOverlay(markerData, marker));
            markerNamesList.appendChild(listItem);
        }
    });
});

const posMarker = L.icon({
    iconUrl: 'https://toppng.com/uploads/preview/button-icon-bluesky-google-current-location-ico-11562972550n6hrlknyqo.png',
    iconSize: [15, 15],
    iconAnchor: [7, 11],
    popupAnchor: [-3, -76]
});

L.marker([16.69, 74.23], { icon: posMarker }).addTo(map);

