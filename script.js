 // Map initialization 
 var map = L.map('map').setView([16.686875, 74.2272],14);
 var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 osm.addTo(map);

// Add your markers
var markersData = [
    { coords: [16.6868981, 74.2245119], name: "ShivaMandir 1" },
    { coords: [16.6878053, 74.2268129], name: "RadhaKrishna Mandir Old Maratha Architecture" },
    { coords: [16.6876496, 74.2272880], name: "Padmavati Mandir" },
    { coords: [16.6880179, 74.2272511], name: "GajaGanesh" },
    { coords: [16.6875259, 74.2285171], name: "Jayprabha Studio" },
    { coords: [16.6840401, 74.2319141], name: "Renuka Mandir s.1840" },
    { coords: [16.692538, 74.224976], name: "Mirajkar Tikti" },
    { coords: [16.692193, 74.224434], name: "Nurshimha Mandir 1" },
    { coords: [16.6918619, 74.2243293], name: "Onkareshwar Mandir Southern Script(raja Bhoj?)" },
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
];

// Get the markerNames element
var markerNamesList = document.getElementById('markerNames');

// Add markers and their names to the list
markersData.forEach(function(markerData) {
    var marker = L.marker(markerData.coords).addTo(map);

    // Add each marker's name to the overlay list
    var listItem = document.createElement('li');
    listItem.textContent = markerData.name;
    markerNamesList.appendChild(listItem);

    // Zoom to marker when its name is clicked in the list
    listItem.addEventListener('click', function() {
        map.setView(markerData.coords, 16);
    });
});


 function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);


// Select the About button
const aboutButton = document.querySelector('.navbar button:nth-child(2)'); // Assuming the About button is the second one

// Add an event listener for the click event
aboutButton.addEventListener('click', function() {
    // Redirect to the "About" page
    window.location.href = 'about.html'; // Replace 'about.html' with the URL of the page you want to open
});




