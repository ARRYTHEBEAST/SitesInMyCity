 // Map initialization 
 var map = L.map('map').setView([16.686875, 74.2272],14);
 var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 osm.addTo(map);


 var marker = L.marker([16.6868981, 74.2245119]).addTo(map); // ShivaMandir 1
 var marker = L.marker([16.6878053, 74.2268129]).addTo(map); // RadhaKrishna Mandir Old Maratha Architecture
 var marker = L.marker([16.6876496, 74.2272880]).addTo(map); // Padmavati Mandir
 var marker = L.marker([16.6880179, 74.2272511]).addTo(map); // GajaGanesh
 var marker = L.marker([16.6875259, 74.2285171]).addTo(map); // Jayprabha Studio
 var marker = L.marker([16.6840401, 74.2319141]).addTo(map); // Renuka Mandir s.1840
 var marker = L.marker([16.692538, 74.224976]).addTo(map); //Mirajkar Tikti
 var marker = L.marker([16.692193, 74.224434]).addTo(map); //Nurshimha Mandir 1
 var marker = L.marker([16.6918619,74.2243293]).addTo(map); //Onkareshwar Mandir Southern Script(raja Bhoj?)
 var marker = L.marker([16.6916495, 74.2307380]).addTo(map); //Sathmari
 var marker = L.marker([16.690646, 74.229167]).addTo(map); //Belbag Chowk
 var marker = L.marker([16.6923981, 74.2202060]).addTo(map); //ardha shivaji putala
 var marker = L.marker([16.6929595, 74.2198519]).addTo(map); //Brahmeshwar Park
 var marker = L.marker([16.6929733, 74.2182406]).addTo(map); //Mahakali mandir 1
 var marker = L.marker([16.6944673, 74.2143604]).addTo(map); //rankala tower
 var marker = L.marker([16.6994986, 74.2117278]).addTo(map); //anugamini mandir
 var marker = L.marker([16.6966896, 74.2139182]).addTo(map); //Old Washing Place (dhobi)
 var marker = L.marker([16.6999160, 74.1945288]).addTo(map); //Laksheswar Mandir(waterfront)
 var marker = L.marker([16.7037394, 74.2177601]).addTo(map); //sangramsinha gaikwad statue
 var marker = L.marker([16.7032927, 74.2177269]).addTo(map); //gaikwad samadhi
 var marker = L.marker([16.7036107, 74.2182610]).addTo(map); //maratha architecture (wooden work) temple?
 var marker = L.marker([16.717409, 74.1837]).addTo(map); // Shingnapur Bridge
 var marker = L.marker([16.707178, 74.217496]).addTo(map); // Shivaji Pul
 var marker = L.marker([16.69181, 74.214733]).addTo(map); // Sandhya Math
 var marker = L.marker([16.691476, 74.214250]).addTo(map); // Ancient Grinding Wheel (Chuna/Lime)
 var marker = L.marker([16.690777, 74.242741]).addTo(map) //Shahunagar Shahu Maharaj
 var marker = L.marker([16.686661, 74.242467]).addTo(map) //Pansare Statue
 var marker = L.marker([16.685677063690296, 74.24476721211819]).addTo(map) //Jain Peace Fountain(not functional)
 var marker = L.marker([ 16.678112528032145, 74.25650613438248 ]).addTo(map)  //University Shivaji Maharaj Statue
 var marker = L.marker([ 16.68045203668232, 74.25650030391819 ]).addTo(map)  // Bhaurao Patil Statue
 var marker = L.marker([ 16.683335386532963, 74.25358169487988 ]).addTo(map)  // University Lake Point
 var marker = L.marker([ 16.695784408048777, 74.25683864460689 ]).addTo(map)  // Maratha Light Infantry, Kolhapur Command Entry
 var marker = L.marker([ 16.6993747349747, 74.25449822924905 ]).addTo(map)  // Tank, Fighter Jet, WarShip scale models
 var marker = L.marker([ 16.691389103423028, 74.24460943217142 ]).addTo(map)  // Bai Cha Putala, Mauli Putala
 var marker = L.marker([ 16.69368046074615, 74.236330895537 ]).addTo(map)  // Koteshwar Mandir, LakeView
 var marker = L.marker([ 16.68687874452764, 74.22941512409949 ]).addTo(map)  // Arya Samaj School, 1928


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




