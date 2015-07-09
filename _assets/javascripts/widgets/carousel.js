$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 15,
    responsiveClass: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items:1
        },
        480: {
            items:2
        },
        768: {
            items:3
        },
        992: {
            items:3 
        },
        1200: {
            items:4,
            //loop:false
        }
    }
})