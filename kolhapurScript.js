// Map initialization 
const map = L.map('map').setView([16.686875, 74.2272], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var timePeriods = ['Old', 'Recent', 'Ancient', 'Mideaval']

async function fetchMarkers() {
  try {
    const response = await fetch('http://localhost:3000/api/markers');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching markers:', error);
    return [];
  }
}

// Update your existing code to use this function
async function initMap() {
  const map = L.map('map').setView([16.7, 74.2], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const markerNamesList = document.getElementById('markerNames');
  const markersData = await fetchMarkers();

  markersData.forEach(function (markerData) {
    var marker = L.marker(markerData.coords).addTo(map);

    // Add click event listener to the marker
    marker.on('click', function () {
      hideMobileOverlay();
      zoomToMarkerAndShowOverlay(markerData, marker);
    });

    // Add each marker's name to the overlay list
    var listItem = document.createElement('li');
    listItem.textContent = markerData.name;
    markerNamesList.appendChild(listItem);

    // Zoom to marker when its name is clicked in the list
    listItem.addEventListener('click', function () {
      hideMobileOverlay();
      zoomToMarkerAndShowOverlay(markerData, marker);
    });
  });

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

  // Add this at the beginning of your script
  const mobileToggle = document.getElementById('mobile-toggle');
  const markerList = document.getElementById('marker-list');

  function toggleMobileOverlay() {
    markerList.classList.toggle('show');
    mobileToggle.textContent = markerList.classList.contains('show') ? 'Hide Sites' : 'Show Sites';
  }

  mobileToggle.addEventListener('click', toggleMobileOverlay);

  // Add a resize event listener to handle orientation changes
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767 || window.orientation !== 0) {
      markerList.classList.remove('show');
      mobileToggle.textContent = 'Show Sites';
    }
  });

  // Add this after your existing code
  const vibeInput = document.getElementById('vibeInput');
  const vibeSearchButton = document.getElementById('vibeSearchButton');

  // Simple RAG function (you'll need to replace this with a more sophisticated system)
  function findPlacesByVibe(vibe) {
    const vibeLower = vibe.toLowerCase();
    return markersData.filter(marker => {
      const descriptionLower = (marker.data || '').toLowerCase();
      const nameLower = marker.name.toLowerCase();
      const categoriesLower = (marker.categories || []).map(cat => cat.toLowerCase());
      
      return descriptionLower.includes(vibeLower) || 
             nameLower.includes(vibeLower) || 
             categoriesLower.some(cat => cat.includes(vibeLower));
    });
  }

  vibeSearchButton.addEventListener('click', () => {
    const vibe = vibeInput.value;
    if (vibe) {
      const matchingPlaces = findPlacesByVibe(vibe);
      
      // Clear existing markers
      markerNamesList.innerHTML = '';
      
      // Add matching places to the list
      matchingPlaces.forEach(place => {
        const listItem = document.createElement('li');
        listItem.textContent = place.name;
        listItem.addEventListener('click', () => {
          const marker = markers.find(m => m.getLatLng().lat === place.coords[0] && m.getLatLng().lng === place.coords[1]);
          if (marker) {
            zoomToMarkerAndShowOverlay(place, marker);
          }
        });
        markerNamesList.appendChild(listItem);
      });
      
      // If on mobile, show the overlay
      if (window.innerWidth <= 767 && window.orientation === 0) {
        markerList.classList.add('show');
        mobileToggle.textContent = 'Hide Sites';
      }
    }
  });
}

// Call initMap when the DOM is loaded
document.addEventListener('DOMContentLoaded', initMap);

