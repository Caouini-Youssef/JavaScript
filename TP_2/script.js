(function() {
    'use strict';
    $(() => {
        $.ajax({
            url: 'https://sokoban.doonoo.fr/',
            method: 'get',
            // data: ...
        })
            .done(function(data) {
                for (let key in data) {
                    $('body').append(
                        $('<div />').append(
                            $('<div />').html(data[key].description),
                            $('<div />').html(data[key].copyright)
                        ).css({
                            'margin': '5px',
                            'padding': '5px',
                            'border': '1px solid purple',
                        }).on('click', function(data) {
                            let self = $(this);
                            // ajax qui va chercher tous les niveaux de ce
                            // groupe :
                            $.ajax({
                                url: 'https://sokoban.doonoo.fr/levels/' + key,
                                method: 'get',
                            }).done(function(data) {
                                self.after(
                                    $('<div />').html(data.title)
                                )
                                for (let level of data.levels) {
                                    for (let cell of level.cells) {
                                        self.after(
                                            $('<pre />').html(cell)
                                        )
                                    }
                                }
                            })
                        })
                    )
                }
            })
            .fail(function() {
                /* erreur critique */
            });
    });

}) ();