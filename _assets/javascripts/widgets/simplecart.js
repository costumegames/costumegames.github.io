simpleCart({
    checkout: {
        type: "PayPal",
        email: "nicky@fishlove.co.uk"
    },
    currency: "GBP",
    cartColumns: [
        { view: function(item, column){
            return  '<a class="thumbnail" href="' + item.get('url') + '"><img src="' + item.get('thumb') + '" alt="' + item.get('name') + '"></a>';
          }, attr: "thumb", label: false
        } ,
        { view: function(item, column){
            return  '<p><a href="' + item.get('url') + '" class="h4">' + item.get('name') + '</a><br>' +
                    'Size: ' + item.get('size') + '</p>' +
                    '<a href="javascript:;" class="simpleCart_remove">Remove</a>';
          }, attr: "name", label: "Name"
        } ,
        { attr: "price" , label: "Price", view: 'currency' } ,
        { view: function(item, column){
            return  '<a href="javascript:;" class="simpleCart_decrement">-</a> ' +
                    item.quantity() + ' ' +
                    '<a href="javascript:;" class="simpleCart_increment">+</a>';
          }, attr: "custom", label: "Quantity"
        }
    ]
});
simpleCart.bind( "afterAdd" , function( item ) {
    toastr.success( item.get("name") + " - " + item.get("size") + " was added to the basket." );
    
    setTimeout(function() {
        var quantity = simpleCart.quantity();
        toastr.info( 
            "Your new sub-total is " + simpleCart.toCurrency( simpleCart.total() ) + " (" + quantity + " item" + (quantity !== 1 ? "s" : "") + "). &nbsp; " +
            "<a class='btn btn-primary' href='" + $('.navbar-cart a.btn').attr('href') + "'>" +
            "<span class='fa fa-shopping-cart'></span> View basket</a>"
        );
    }, 2000);
});
simpleCart.bind( "update", function(e) {
    $el = $('.navbar-cart');
    $btn = $el.find('.btn');
    $btn.css('transition', '1s ease all');
    if(simpleCart.quantity()) {
        $('.simpleCart_checkout').attr('disabled', false);
        $el.fadeIn('1000');
        $btn.addClass('btn-primary');
        setTimeout(function() {
            $btn.removeClass('btn-primary');
        }, 1000);
    }
    else {
        $('.simpleCart_checkout').attr('disabled', true);
        $('.navbar-cart').fadeOut('slow');
    }
});
$('.item_size').on('change', function() {
    $el = $('.item_size option:selected');
    $('.item_price span').text($el.data('price'));
    $('.poster-size').text($el.data('size'));
});
function get_cart_count() {
    var quantity = simpleCart.quantity();
    return quantity + " item" + quantity !== 1 ? "s" : "";
}
