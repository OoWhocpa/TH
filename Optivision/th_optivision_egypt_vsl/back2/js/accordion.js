(function ($) {
    $('.accordion > li:eq(0) .accordion_link').addClass('active').next().slideDown();

    $('.accordion .accordion_link').click(function (j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('.accordion_link.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

function counter2() {

    if (sec2 > 0) {
        sec2--;
    } else {
        if (min2 > 0) {
            min2--;
            sec2 = 59;
        }

    }

    document.querySelector('.min1').innerHTML = (min2 < 10) ? "0" + min2 : min2;
    document.querySelector('.sec1').innerHTML = (sec2 < 10) ? "0" + sec2 : sec2;

    document.querySelector('.min2').innerHTML = (min2 < 10) ? "0" + min2 : min2;
    document.querySelector('.sec2').innerHTML = (sec2 < 10) ? "0" + sec2 : sec2;

    setTimeout("counter2();", 1000);
}

var min2 = 60;
var sec2 = 0;

counter2();