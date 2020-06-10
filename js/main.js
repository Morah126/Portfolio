$(document).ready(function () {
    new WOW().init();
    $('.navbar .nav-link, #scrollTopBtn').click(function () {
        const target = $(this).attr('href');
        console.log(target);
        const position = $(target).offset().top;
        console.log(position);
        const navbarHeight = 56;
        $('html, body').stop().animate({
            scrollTop: position - navbarHeight
        }, 500);
    });
    const myPosition = {
        lat: 23.0231011,
        lng: 120.2243257
    };
    const mapElement = $('#map')[0];
    const googleMap = new google.maps.Map(mapElement, {
        center: myPosition,
        zoom: 18,
        styles: mapStyles,
        draggable: false
    });
    const mapMarker = new google.maps.Marker({
        position: myPosition,
        map: googleMap
    });
});