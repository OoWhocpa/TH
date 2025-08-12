$(document).ready(function () {
  Main.event();
  $(document).ready(function() {
    $('.pre_toform').click(function(){
      $("html, body").animate({scrollTop: $("form").offset().top-300}, 1000);
      return false;
    });
  });
});
var Main = {
  event: function () {
    $(document).on('scroll', Main.show);
  },
  show: function () {
    var scroll = $(document).scrollTop(),
      advantagesPos = $('.advantages').offset().top - 300,
      composition = $('.composition'),
      compositionPos = composition.offset().top - 200,
      offerPos = $('.offer').offset().top - 200;
    if (scroll >= advantagesPos) {
      $('.advantages__item').addClass('show');
    }
    if (scroll >=compositionPos) {
      $('.composition__item').addClass('show');
    }
    if (scroll >= offerPos) {
      $('.offer__item').addClass('show');
    }
  }
};