(function () {
    'use strict';
    $(() => {
        $('#deco').submit(function () {
            
        });
        $('#form-login').submit(function () {
            //$('#messages').html(data.message).fadeOut();
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                if (data.success == true) {
                    $('#messages').html("connexion réussie").fadeIn(1500);
                }
                else {
                    $('#messages').html(data.message).fadeIn(1500);
                    $('#messages').html(data.message).fadeOut(1500);
                }
            }).fail(function () {
                $('body').html('une erreur critique est arrivée, merci ...');
            });
            return false;
        });
    });
})();