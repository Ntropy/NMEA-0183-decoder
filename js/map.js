(function(){
    var GOOGLE_MAP_KEY = 'AIzaSyBLPf2F-5WCs3vG-Qq_SfQKmDmHrvU_PLQ';
    var map = null;
    var mapOptions = {
    };
    
    function initMap(){
        if(map === null){
            $.getScript('http://maps.googleapis.com/maps/api/js?sensor=true&key=' + GOOGLE_MAP_KEY);
            
            map = new google.maps.Map($('#map').get(), mapOptions);
        }
    }
    
    nmea_redener_register(
        'map',
        function(value){
            init();
        }
    );

})();