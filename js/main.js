$( document ).ready(function() {

      $(window).scroll(function(){
      $(".banner-text , .banner-span").css("opacity", 1 - $(window).scrollTop() / 300);
    });

      $.fn.parallax = function(options) {

          var windowHeight = $(window).height();

          // Establish default settings
          var settings = $.extend({
              speed        : 0.5
          }, options);

          // Iterate over each object in collection
          return this.each( function() {

          // Save a reference to the element
          var $this = $(this);

          // Set up Scroll Handler
          $(document).scroll(function(){

      var scrollTop = $(window).scrollTop();
              var offset = $this.offset().top;
              var height = $this.outerHeight();

      // Check if above or below viewport
  if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
  return;
  }

  var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

      // Apply the Y Background Position to Set the Parallax Effect
      $this.css('background-position', 'center ' + yBgPosition + 'px');

          });
          });
      }

      // THIS PART WOULD GO AT THE BOTTOM OF THE HTML PAGE (INSIDE <script> TAGS)
      $('.parallax').parallax({
  		speed : 1
    });

  });
