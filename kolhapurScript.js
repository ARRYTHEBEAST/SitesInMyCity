// Initialize the map centered on Kolhapur
const map = L.map('map').setView([16.686875, 74.2272], 14);

// Add the OpenStreetMap tile layer to the map
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add the satellite tile layer
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Define markers data
const markersData = [
    {
        coords: [16.6868981, 74.2245119], 
        name: "ShivaMandir 1",
        data: "This temple is placed in the corner of a already isolated and 'sketchy' place. This temple is mostly closed and only open on core festive days for the local shiva bhakts. With average aesthic value this place does not call for a detour just to visit it.",
        categories: ['Temple', 'Recent', 'Architecture']
    },
    {
        coords: [16.6878053, 74.2268129], 
        name: "RadhaKrishna Mandir Old Maratha Architecture",
        data: "This temple showcases old Maratha architecture.", 
        categories: ['Temple', 'Mideaval', 'Architecture', 'Religious']
    },
    {
        coords: [16.6876496, 74.2272880],
        name: "Padmavati Mandir",
        categories: ['Temple', 'Mideaval', 'Religious']
    },
    {
        coords: [16.6880179, 74.2272511],
        name: "GajaGanesh",
        categories: ['Temple', 'Recent']
    },
    {
        coords: [16.6875259, 74.2285171],
        name: "Jayprabha Studio",
        categories: ['Heritage', 'Old']
    },
    {
        coords: [16.6840401, 74.2319141],
        name: "Renuka Mandir s.1840"
    },
    {
        coords: [16.692538, 74.224976],
        name: "Mirajkar Tikti"
    },
    {
        coords: [16.692193, 74.224434],
        name: "Nurshimha Mandir 1"
    },
    {
        coords: [16.6918619, 74.2243293],
        name: "Onkareshwar Mandir Southern Script(raja Bhoj?)",
        data: "this is data"
    },
    {
        coords: [16.6916495, 74.2307380],
        name: "Sathmari"
    },
    {
        coords: [16.690646, 74.229167],
        name: "Belbag Chowk"
    },
    {
        coords: [16.6923981, 74.2202060],
        name: "ardha shivaji putala"
    },
    {
        coords: [16.6929595, 74.2198519],
        name: "Brahmeshwar Park"
    },
    {
        coords: [16.6929733, 74.2182406],
        name: "Mahakali mandir 1"
    },
    {
        coords: [16.6944673, 74.2143604],
        name: "rankala tower"
    },
    {
        coords: [16.6994986, 74.2117278],
        name: "anugamini mandir"
    },
    {
        coords: [16.6966896, 74.2139182],
        name: "Old Washing Place (dhobi)"
    },
    {
        coords: [16.6999160, 74.1945288],
        name: "Laksheswar Mandir(waterfront)"
    },
    {
        coords: [16.7037394, 74.2177601],
        name: "sangramsinha gaikwad statue"
    },
    {
        coords: [16.7032927, 74.2177269],
        name: "gaikwad samadhi"
    },
    {
        coords: [16.7036107, 74.2182610],
        name: "maratha architecture (wooden work) temple?"
    },
    {
        coords: [16.717409, 74.1837],
        name: "Shingnapur Bridge"
    },
    {
        coords: [16.707178, 74.217496],
        name: "Shivaji Pul"
    },
    {
        coords: [16.69181, 74.214733],
        name: "Sandhya Math"
    },
    {
        coords: [16.691476, 74.214250],
        name: "Ancient Grinding Wheel (Chuna/Lime)"
    },
    {
        coords: [16.690777, 74.242741],
        name: "Shahunagar Shahu Maharaj"
    },
    {
        coords: [16.686661, 74.242467],
        name: "Pansare Statue"
    },
    {
        coords: [16.685677063690296, 74.24476721211819],
        name: "Jain Peace Fountain(not functional)"
    },
    {
        coords: [16.678112528032145, 74.25650613438248],
        name: "University Shivaji Maharaj Statue"
    },
    {
        coords: [16.68045203668232, 74.25650030391819],
        name: "Bhaurao Patil Statue"
    },
    {
        coords: [16.683335386532963, 74.25358169487988],
        name: "University Lake Point"
    },
    {
        coords: [16.695784408048777, 74.25683864460689],
        name: "Maratha Light Infantry, Kolhapur Command Entry"
    },
    {
        coords: [16.6993747349747, 74.25449822924905],
        name: "Tank, Fighter Jet, WarShip scale models"
    },
    {
        coords: [16.691389103423028, 74.24460943217142],
        name: "Bai Cha Putala, Mauli Putala"
    },
    {
        coords: [16.69368046074615, 74.236330895537],
        name: "Koteshwar Mandir, LakeView"
    },
    {
        coords: [16.68687874452764, 74.22941512409949],
        name: "Arya Samaj School, 1928"
    },
    {
        coords: [16.791012471115316, 74.19121417050346],
        name: "Pohale Caves"
    },
];

// Get references to DOM elements
const desktopOverlay = document.getElementById('desktop-overlay');
const draggableOverlay = document.getElementById('draggable-overlay');
const dragHandle = document.getElementById('drag-handle');
const desktopSearchInput = document.getElementById('desktopSearchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const desktopMarkerNames = document.getElementById('desktopMarkerNames');
const mobileMarkerNames = document.getElementById('mobileMarkerNames');
const infoOverlay = document.getElementById('info-overlay');
const markerTitle = document.getElementById('marker-title');
const markerInfo = document.getElementById('marker-info');
const backButton = document.getElementById('back-button');
const closeButton = document.getElementById('close-button');
const mapButton = document.getElementById('mapButton');

let startY, startHeight, currentHeight, windowHeight;

function initDrag(e) {
    startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    startHeight = draggableOverlay.offsetHeight;
    windowHeight = window.innerHeight;
    
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('touchmove', doDrag, { passive: false });
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
}

function doDrag(e) {
    e.preventDefault();
    const y = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    currentHeight = startHeight + startY - y;
    
    if (currentHeight > windowHeight * 0.3 && currentHeight < windowHeight) {
        draggableOverlay.style.height = `${currentHeight}px`;
    }
}

function stopDrag() {
    const snapHeight = currentHeight < windowHeight * 0.5 ? '30vh' :
                       currentHeight < windowHeight * 0.85 ? '70vh' : '100vh';
    draggableOverlay.style.height = snapHeight;
    
    document.removeEventListener('mousemove', doDrag);
    document.removeEventListener('touchmove', doDrag);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchend', stopDrag);
}

dragHandle.addEventListener('mousedown', initDrag);
dragHandle.addEventListener('touchstart', initDrag, { passive: false });

function updateMarkerList(searchQuery = '') {
    desktopMarkerNames.innerHTML = '';
    mobileMarkerNames.innerHTML = '';
    
    markersData.forEach(markerData => {
        if (markerData.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            const desktopListItem = document.createElement('li');
            desktopListItem.textContent = markerData.name;
            desktopListItem.addEventListener('click', () => zoomToMarkerAndShowOverlay(markerData));
            
            const mobileListItem = desktopListItem.cloneNode(true);
            mobileListItem.addEventListener('click', () => zoomToMarkerAndShowOverlay(markerData));
            
            desktopMarkerNames.appendChild(desktopListItem);
            mobileMarkerNames.appendChild(mobileListItem);
        }
    });
}

desktopSearchInput.addEventListener('input', (e) => updateMarkerList(e.target.value));
mobileSearchInput.addEventListener('input', (e) => updateMarkerList(e.target.value));

function zoomToMarkerAndShowOverlay(markerData) {
    const zoomLevel = Math.max(map.getZoom(), 18);
    map.setView(markerData.coords, zoomLevel, { animate: true, duration: 1 });

    markerTitle.textContent = markerData.name;
    markerInfo.textContent = markerData.data || "No additional information available.";
    infoOverlay.style.display = 'block';

    // Show the draggable overlay on mobile
    if (window.innerWidth <= 767) {
        draggableOverlay.style.height = '30vh';
    }
}

// Function to toggle map view and update localStorage
function toggleMapView() {
    if (map.hasLayer(satelliteLayer)) {
        map.removeLayer(satelliteLayer);
        map.addLayer(osmLayer);
        mapButton.textContent = "Satellite View";
        localStorage.setItem('mapView', 'street');
    } else {
        map.removeLayer(osmLayer);
        map.addLayer(satelliteLayer);
        mapButton.textContent = "Street View";
        localStorage.setItem('mapView', 'satellite');
    }
}

// Add click event listener to map button
mapButton.addEventListener('click', toggleMapView);

// Check localStorage and set initial map view
const savedMapView = localStorage.getItem('mapView');
if (savedMapView === 'satellite') {
    map.removeLayer(osmLayer);
    map.addLayer(satelliteLayer);
    mapButton.textContent = "Street View";
} else {
    mapButton.textContent = "Satellite View";
}

// Add markers to the map
markersData.forEach(markerData => {
    const marker = L.marker(markerData.coords).addTo(map);
    marker.on('click', () => zoomToMarkerAndShowOverlay(markerData));
});

// Close button functionality
closeButton.addEventListener('click', () => infoOverlay.style.display = 'none');

// Back button functionality
backButton.addEventListener('click', () => infoOverlay.style.display = 'none');

// Adjust overlay on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        desktopOverlay.style.display = 'block';
        draggableOverlay.style.display = 'none';
    } else {
        desktopOverlay.style.display = 'none';
        draggableOverlay.style.display = 'block';
        draggableOverlay.style.height = '30vh';
    }
});

// Initial setup
updateMarkerList();
if (window.innerWidth <= 767) {
    desktopOverlay.style.display = 'none';
    draggableOverlay.style.display = 'block';
} else {
    desktopOverlay.style.display = 'block';
    draggableOverlay.style.display = 'none';
}

