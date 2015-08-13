// tooltips
$('[data-toggle="tooltip"]').tooltip();

// tabs
$('[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $(window).trigger('resize');
});

// smooth scroll to anchor
$('a[href*=#]:not([href=#],.carousel-control,[data-toggle])').click( function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
