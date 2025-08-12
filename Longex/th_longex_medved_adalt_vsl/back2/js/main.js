$(document).ready(function () {

    $('[data-toggle="scroll"]').on("click", function (e) {
        var anchor = $(this).attr("data-id");
        var bodyLeft = $("body").css("left");
        if (bodyLeft == "200px") {
            $("body").animate({
                left: "-=200px"
            }, 500);
        }
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
        e.preventDefault();
    });




    $(".regular").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });




    function t(t, n) {
        var e = t - .5 + Math.random() * (n - t + 1);
        return e = Math.round(e)
    }

    function n(n, e) {
        var a = t(n, e),
                s = a - t(5, 9);
        $(".op_on").text(a), $(".op_raz").text(s)
    }

    var ls = localStorage;
    var e = (new Date).getTime() + 24e5;

    if (ls.getItem('prostamin3')) {
        e = ls.getItem('prostamin3');
    } else {
        ls.setItem('prostamin3', e);
    }
    // $(".countdown__wrap").countdown(e, function (t) {
    //     $(this).html(t.strftime('<div class="counter__hour"><span class="counter__num_item">%H</span><span class="header__counter text-bottom">часов</span></div><div class="counter__min"><span class="counter__num_item">%M</span><span class="header__counter text-bottom">минут</span></div><div class="counter__sec"><span class="counter__num_item">%S</span><span class="header__counter text-bottom">секунд</span></div>'))
    // }), n(35, 45), setInterval(n, 15e3, 35, 45)

});

function startCountdown(timerId, duration) {
    const timerElement = document.getElementById(timerId);
    let timeRemaining = duration;

    function updateTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining > 0) {
            timeRemaining--;
        } else {
            clearInterval(interval);
            timerElement.textContent = "00:00"; // Коли час закінчився
        }
    }

    updateTimer(); // Початкове оновлення
    const interval = setInterval(updateTimer, 1000); // Оновлюємо щосекунди
}

document.addEventListener("DOMContentLoaded", function () {
    const duration = 30 * 60; // 30 хвилин в секундах
    startCountdown("timer1", duration); // Перший таймер
    startCountdown("timer2", duration); // Другий таймер
});
