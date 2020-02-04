(function () {
    $(document).ready(function () {
        let css_black = {'display' : 'inline-block','background-color': 'black', 'color': 'white', 'min-width' : '75px', 'min-height' : '75px'};
        let css_white = {'display' : 'inline-block','background-color': 'white', 'color': 'black', 'min-width' : '75px', 'min-height' : '75px'};
        let css_blue = {'display' : 'inline-block','background-color': 'blue', 'color': 'black', 'min-width' : '75px', 'min-height' : '75px'};
        for (let y = 0; y < 8; y++) {
            let ligne = $('<div></div>');
            $('#damier').append(ligne);
            for (let x = 0; x < 8; x++) {
                ligne.append($('<div></div>')
                    .data('coord-x', x)
                    .data('coord-y', y)
                    .css((x + y) % 2 ? css_black : css_white)
                    .append('&nbsp;')
                    .mouseleave (function () {
                        if (($(this).data('coord-x') + $(this).data('coord-y')) % 2) {
                            $(this).css(css_black);
                        }
                        else
                        {
                            $(this).css( css_white);
                        }
                    })
                    .mouseover(function() {
                        $(this).css(css_blue)
                    }))
            }
        }
    });
})();
