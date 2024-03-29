$( document ).ready(function() {

      $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll > 300) {
	         $(".nav-mobile, .nav-desktop").css("background" , "#333");
           $(".nav-mobile, .nav-desktop").css("linear-gradient" , "none");
           $(".nav-mobile, .nav-desktop").css("height" , "50px");
           $(".navbar-brand").css("font-size", "20px");
           $(".nav-link").css("font-size", "18px");
	       } else {
           $(".nav-mobile, .nav-desktop").css("background" , "linear-gradient(to top,transparent 0,rgba(0,0,0,.8) 55px,rgba(0,0,0,.8) 96px)");
           $(".nav-mobile, .nav-desktop").css("height" , "70px");
           $(".navbar-brand").css("font-size", "30px");
           $(".nav-link").css("font-size", "22px");
         }

         //banner content fades out on scroll
        $(".banner-text , .banner-span").css("opacity", 1 - $(window).scrollTop() / 400);
    });

    //Navigation Scroll
    $('a[href]').click( function(){
      $('html, body').animate(
        { scrollTop: $( $.attr(this, 'href') ).offset().top }, 800);
      return false;
    });
    //Logo Scroll Up
    $(".navbar-brand").on("click", function() {
      $('html, body').animate(
        { scrollTop: 0 }, 800);
      return false;
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
      };

      $('.parallax').parallax({
        speed : 0.4
      });

  //right menu toggle
    $count=1;
		$('#hamburger').click(function(){
			   if($count%2!=0) {
			      $('#right-menu').animate({"marginRight":"200px"},500,function(){
              $(this).addClass('active');
              $('#hamburger a').removeClass("fa-bars");
              $('#hamburger a').addClass("fa-close");
			});
      $count++;
			   } else {
			        $('#right-menu').animate({"marginRight":"0"},500,function(){
                $(this).removeClass('active');
                $('#hamburger a').removeClass("fa-close");
                $('#hambuarger a').addClass("fa-bars");
			});
			$count++;
			 }
		});

    $('section, .jumbotron').on('click', function(){
      $('#right-menu').animate({"marginRight":"0"},500,function(){
        $(this).removeClass('active');
        $('#hamburger a').removeClass("fa-close");
        $('#hamburger a').addClass("fa-bars");
      });
    });

  });
