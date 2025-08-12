$(document).ready(function() {
    $(".slider-main").slick({
        arrows: true,
        dots: true,
        autoplay: true,
    });

    /* modal */
    $(".header-call").on("click", function(event) {
        event.preventDefault();
        $(".popup1").fadeIn(300);
    });

    $(".modal").on("click", function(event) {
        event.preventDefault();
        $(".popup1").fadeOut(300);
    });

    $(".scroll").click(function() {
        var form;
        if ($(".form-wrap").css("display") == "block") {
            form = $(".x_order_form");
        } else {
            form = $(".form-mob .x_order_form");
        }
        var scroll_block = form.offset().top - 100;
        $("html,body").animate({
                scrollTop: scroll_block,
            },
            1200
        );
        return false;
    });
});
$(document).ready(function() {
    $(".feedback").click(function() {
        $(".popup-window").removeClass("hidden");
    });
    $(".close-popup").click(function() {
        $(".popup-window").addClass("hidden");
    });
    $("body").click(function(evt) {
        if (!evt.target.closest(".popup-window") &&
            !evt.target.closest(".feedback")
        ) {
            $(".popup-window").addClass("hidden");
        }
    });
});

