$(function(){

  $('body').addClass('js-loaded');

  var workTransition = function() {
    var workTrigger = $('.work--item');
    var overlay = $('.overlay');

    workTrigger.bind('click', function(e){
      e.preventDefault();
      var url = $(this).attr('href');
      overlay.addClass('js-is-active').delay(500).queue( function() {
        window.location.href = url;
      });
    });
  }

  var contactModal = function() {
    body = $('body');
    var contactTrigger = $('.main-nav--item__contact');
    var contactOverlay = $('.contact');
    var contactClose = $('.contact--close');

    contactTrigger.bind('click', function(e) {
      e.preventDefault();
      body.addClass('js-no-scroll');
      contactOverlay.addClass('js-is-active');
    });

    contactClose.bind('click', function(e) {
      e.preventDefault();
      body.removeClass('js-no-scroll');
      contactOverlay.removeClass('js-is-active');
    });
  }

  contactModal();
  workTransition();

});
