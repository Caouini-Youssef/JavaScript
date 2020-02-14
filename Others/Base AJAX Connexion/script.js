(function () {
    'use strict';
    $(() => {
        $('#form-login').submit(function() {
            $.ajax({
                url: '/json/login.php',
                method: 'post',
                data: $(this).serialize()
            }).done(function() {

            }).fail(function () {
                $('body').html('une erreur critique est arrivée, merci ...');
            });
            return false;
        });
    });
}) ();