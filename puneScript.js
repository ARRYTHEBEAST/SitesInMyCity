
// Map initialization 
var map = L.map('map').setView([18.51980553245054, 73.85528008294365], 12);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
osm.addTo(map);

// Add your markers
var markersData = [
    { coords: [18.51946852948223, 73.85539985923036], name: "Shaniwar Wada" , 
        data:"This is the shaniwar wada"}
];

const aboutButton = document.querySelector('.navbar button:nth-child(2)'); // Assuming the About button is the second one
const homeButton = document.querySelector('.navbar button:nth-child(1)'); // Assuming the Home button is the second one

// Add an event listener for the click event
aboutButton.addEventListener('click', function() {
    // Redirect to the "about" page
    window.location.href = 'about.html'; // Replace 'about.html' with the URL of the page you want to open

});
// Add an event listener for the click event
homeButton.addEventListener('click', function() {
    // Redirect to the "about" page
    window.location.href = 'index.html'; // Replace 'about.html' with the URL of the page you want to open

});


// Get the markerNames element
var markerNamesList = document.getElementById('markerNames');
var infoOverlay = document.getElementById('info-overlay');
var markerTitle = document.getElementById('marker-title');
var markerInfo = document.getElementById('marker-info');
var backButton = document.getElementById('back-button');
var closeButton = document.getElementById('close-button');

var currentMarker = null;

// Add markers and their names to the list
markersData.forEach(function(markerData) {
    var marker = L.marker(markerData.coords).addTo(map);

    // Add each marker's name to the overlay list
    var listItem = document.createElement('li');
    listItem.textContent = markerData.name;
    markerNamesList.appendChild(listItem);

    // Zoom to marker when its name is clicked in the list
    listItem.addEventListener('click', function() {
        // Zoom to the marker
        map.setView([markerData.coords[0], markerData.coords[1] + 0.001], 15, {
            animate: true,
            duration: 1
        });

        // Store the clicked marker's name in currentMarker
        currentMarker = markerData.name;

        // Show the overlay and update its content
        markerTitle.textContent = markerData.name;
        markerInfo.textContent = markerData.data || "No additional information available.";

        infoOverlay.style.display = 'block';

        // Enlarge the marker
        marker.setIcon(L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconSize: [35, 55], // Enlarged size
            iconAnchor: [17, 55], // Adjusted anchor for the larger size
            popupAnchor: [1, -34],
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            shadowSize: [41, 41],
            shadowAnchor: [12, 41]
        }));

        // Reset the marker size after a delay
        setTimeout(function() {
            marker.setIcon(L.icon({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconSize: [25, 41], // Original size
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                shadowSize: [41, 41],
                shadowAnchor: [12, 41]
            }));
        }, 500); // Adjust the delay as needed
    });
});

// Close button functionality
closeButton.addEventListener('click', function() {
    infoOverlay.style.display = 'none';
});

// Back button functionality
backButton.addEventListener('click', function() {
    infoOverlay.style.display = 'none';
});


// Add search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    var searchQuery = e.target.value.toLowerCase();
    markerNamesList.innerHTML = '';

    markersData.forEach(function(markerData) {
        if (markerData.name.toLowerCase().includes(searchQuery)) {
            var listItem = document.createElement('li');
            listItem.textContent = markerData.name;

            listItem.addEventListener('click', function() {
                // Zoom to the marker
                map.setView([markerData.coords[0], markerData.coords[1] + 0.001], 15, {
                    animate: true,
                    duration: 1
                });

                currentMarker = markerData.name

                

                // Enlarge the marker
                marker.setIcon(L.icon({
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    iconSize: [35, 55], // Enlarged size
                    iconAnchor: [17, 55], // Adjusted anchor for the larger size
                    popupAnchor: [1, -34],
                    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                    shadowSize: [41, 41],
                    shadowAnchor: [12, 41]
                }));

                // Reset the marker size after a delay
                setTimeout(function() {
                    marker.setIcon(L.icon({
                        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                        iconSize: [25, 41], // Original size
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                        shadowSize: [41, 41],
                        shadowAnchor: [12, 41]
                    }));
                }, 500); // Adjust the delay as needed
            });

            markerNamesList.appendChild(listItem);
        }
    });
});

