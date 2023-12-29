const locationButton = document.getElementById('location')
const locationMap = document.getElementById('map')
if (window.innerWidth < 800){
    locationMap.width = `${locationButton.offsetWidth-40}`;
}
