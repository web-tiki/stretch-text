$.fn.strech_text = function(){
    var elmt          = $(this),
        cont_width    = elmt.width(),
        txt           = elmt.text(),
        one_line      = $('<span class="stretch_it">' + txt + '</span>'),
        nb_char       = elmt.text().length,
        spacing       = cont_width/nb_char,
        txt_width;
    
    elmt.html(one_line);
    txt_width = one_line.width();
    
    if (txt_width < cont_width){
        var  char_width     = txt_width/nb_char,
             ltr_spacing    = spacing - char_width + (spacing - char_width)/nb_char ; 
  
        one_line.css({'letter-spacing': ltr_spacing});
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};

$(document).ready(function () {
     $('.stretch').each(function(){
        $(this).strech_text();
    });
    $(window).resize(function () { 
        $('.stretch').each(function(){
            $(this).strech_text();
        });
    });
});
