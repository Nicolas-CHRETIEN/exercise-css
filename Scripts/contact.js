
// Initialize and add the map in contact page.
function initMap() {
        
        // The location of Gap
        const Gap = { lat: 44.55859326160936, lng: 6.077209915805441 };

        // The map, centered at Gap
        const map = new google.maps.Map(document.querySelector('.map'), {
            zoom: 15,
            center: Gap,
        });

        // The marker, positioned at Gap
            new google.maps.Marker({
            position: Gap,
            map: map,
        });
    }
    
    window.initMap = initMap;