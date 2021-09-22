//Owl Carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
        animateOut: 'fadeOut'
    })
})

//Toggle Navbar
$(document).ready(function () {
    $(".black").hide();
    $(".mobile-menu").hide();

    $(".bi-list").click(function () {
        $(".black").show();
        $(".mobile-menu").show();
    });

    $(".bi-x-lg").click(function () {
        $(".black").hide();
        $(".mobile-menu").hide();
    });

    $(".close").click(function () {
        $(".black").hide();
        $(".mobile-menu").hide();
    });
});

