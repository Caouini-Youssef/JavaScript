(function () {
    'use strict';
    $(() => {
        $('#form-login').submit(function() {
            $('#messages').html(data.message).fadeOut();
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function(data) {
                if (data.success == true) {
                    window.location.href = '/';
                }
                else
                {
                    $('#messages').html(data.message).fadeIn();
                }
            }).fail(function () {
                $('body').html('une erreur critique est arrivée, merci ...');
            });
            return false;
        });
    });
}) ();