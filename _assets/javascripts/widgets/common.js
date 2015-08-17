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

if(location.pathname == "/events.html") {
    $(".img-3x4").each(function() {
        switch(Math.floor(Math.random()*4)) {
            case 0:
                $(this).addClass("bg-success");
                break;

            case 1:
                $(this).addClass("bg-warning");
                break;

            case 2:
                $(this).addClass("bg-danger");
                break;

            case 3:
                $(this).addClass("bg-primary");
                break;
        }
    });

    $(".col-sm-3").find("h3").each(function() {
        $(this).parent().css("cursor", "pointer");

        $(this).parent().click(function() {
            location.replace("/schedule.html#" + $(this).find("h3").first().text().toLowerCase());
        });
    });
}
