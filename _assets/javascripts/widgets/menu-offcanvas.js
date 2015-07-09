$(document).on('click', '.navbar-toggle, .menu-backdrop', function() {
    if ($('body').hasClass('menu-open')) {
        $('body').removeClass('menu-open');
        $('.menu-backdrop').removeClass('in');
        setTimeout(function(){ 
            $('.menu-backdrop').remove(); 
        }, 1000);
        $('#content').focus();
    } else {
        $('body').append('<div class="menu-backdrop fade"></div>');
        setTimeout(function(){ 
            $('.menu-backdrop').addClass('in');
            $('body').addClass('menu-open');
        }, 100);
    }
});