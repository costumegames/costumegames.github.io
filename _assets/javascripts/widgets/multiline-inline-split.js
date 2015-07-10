
function splitText() {
    var el = $(this);
    el.attr('style', '');
    el.html('<span>' + el.text().split(" ").join(" </span><span>") + '</span>');
    el.children('span:empty').remove();
    var refPos = el.children('span:first-child').position().top;
    var newPos;
    el.children('span').each(function(index) {
        var el = $(this);
        newPos = el.position().top; 
        if (index === 0) {
           return;
        }
        if (newPos == refPos) {
            el.prepend(el.prev().text());
            el.prev().remove();
        } 
        refPos = newPos;
    });
    el.attr('style', 'display: block; margin: 0 -10px;');
}

var resizeTimer;

$(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        $('.text-split').each(splitText);
    }, 250);
});

$('.text-split').each(splitText);