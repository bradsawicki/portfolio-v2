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

  workTransition();

});
