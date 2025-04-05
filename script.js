//Initialize the map
let map;
let buses = [
    {
        id: 1,
        position: { lat: 12.9715987, lng: 77.594566 },  // Coordinates of the bus
        passengers: 'Half seats are filled',
        status: 'Bus is on time'
    },
    {
        id: 2,
        position: { lat: 12.9345331, lng: 77.626579 },
        passengers: 'Bus is full',
        status: 'Bus is delayed'
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 12.9715987, lng: 77.594566 },  // Default center (City center)
        zoom: 12
    });

    // Add buses as markers
    buses.forEach(bus => {
        let marker = new google.maps.Marker({
            position: bus.position,
            map: map,
            title: `Bus ${bus.id}`
        });

        // Click event on the marker to show bus details
        marker.addListener('click', function() {
            displayBusDetails(bus);
        });
    });
}

// Function to display bus details
function displayBusDetails(bus) {
    const busDetails = document.getElementById('bus-details');
    busDetails.innerHTML = `
        <p>Bus ID: ${bus.id}</p>
        <p>Passengers: ${bus.passengers}</p>
        <p>Status: ${bus.status}</p>
    `;
}

// Function to search the bus route
function searchBusRoute() {
    const searchBar = document.getElementById('search-bar').value;

    // Logic for fetching buses traveling on the route
    // Placeholder functionality to simulate bus search
    if (searchBar.toLowerCase().includes('city center')) {
        alert("Buses found for this route!");
        initMap();
    } else {
        alert("No buses found on this route.");
    }
}

// Initialize the map on window load
window.onload = function () {
    initMap();
};
// console.log("hello");