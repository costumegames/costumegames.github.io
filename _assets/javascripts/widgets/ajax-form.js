$( ".donforms" ).submit(function( event ) {
    event.preventDefault();
    
    var $form = $(this),
        data = $form.serialize(),
        action = $form.attr("action"),
        $input = $form.find('input, select, textarea').prop('disabled', 1),
        $btn = $form.find('button').button('loading');
    
    var send = $.post(action, data)
        .always(function(data) {
            $input.prop('disabled', 0);
            $btn.button('reset');
            $form.find('.alert').remove();
            if (typeof Recaptcha != "undefined") {
                Recaptcha.reload();
            }
            $('html,body').animate({ scrollTop: $form.offset().top }, 1000);
        })
        .done(function(data) {
            if(data.status == 'error') {
                $form.prepend('<div class="alert alert-danger">Error: ' + data.message + '</div>');
            } else {
                $form[0].reset();
                $form.prepend('<div class="alert alert-success">Message sent successfully. We will be in touch shortly.</div>');
            }
        })
        .fail(function(data) {
            $form.prepend('<div class="alert alert-danger">Error: ' + data.message + '</div>');
        });
});