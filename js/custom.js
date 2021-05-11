var $sticky = $('header');
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 250) { $sticky.addClass('header_fixed'); } else { $sticky.removeClass('header_fixed'); }
});





$('.get-call-back').click(function() {
    $(".right-form").toggleClass("active");
});

function alert123(x) {
    document.getElementById('projectnamemobilecommonform').value = x;
}




var popup = $('.popup');
$(window).scroll(function() {
    /*    
    var show = $(document).scrollTop() / (600);
    popup.css('opacity', show);  
    */
    if ($(window).scrollTop() > $(document).height() / 3) {
        popup.addClass('popup_show');
    };
    $('.close').click(function() {
        popup.css('display', 'none');
    });
});



function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isNAME(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        return false;
    }
    return true;
}



function AddReadMore() {
    var carLmt = 250;
    var readMoreTxt = " Read More";
    var readLessTxt = " Read Less";

    $(".addReadMore").each(function() {
        if ($(this).find(".firstSec").length)
            return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
        }

    });
    $(document).on("click", ".readMore,.readLess", function() {
        $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
}
$(function() {
    AddReadMore();
});