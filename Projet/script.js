(function () {
    'use strict';
    $(() => {
        $('#deconnexion').on("click",function () {
            
        });
        $('#ingredients').on("click",function () {
            
        });
        $('#cocktails').on("click",function () {
            $.ajax({
                url: "cocktails.php",
                method: "GET",
                data: {
                    cocktails: "ALL",
                }
             })
            .done(function (data) {
                console.log(data);
                if (data['success'] == false)
                {
                    alert("Erreur : " + data['message']);
                }
                for (let cocktail in data['cocktails'])
                {
                    let element = $('<div>'+cocktail.name+'</div>');
                    $('body').append(element);
                }
            })
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