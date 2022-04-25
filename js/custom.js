$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 50){
      $(".navbar").addClass("sticky-header");
    }else{
      $(".navbar").removeClass("sticky-header");
    }
  });
});

$('#wideProduct').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }

});
$('#testimonials').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }

});
$('#article').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }

});
$( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
 $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');


$(".playbtn").click(function () {
  $(".videothumbnails").hide();
  $("#yt")[0].src += "?autoplay=1";
  $("#yt").show();
  });


 $(document).ready(function () {
      //shared variable
      var max = 0,
          $els = $('.online_working');
      $els.each(function () {
          max = Math.max($(this).height(), max); 
      });

      $els.height(max)
  });
 $(document).ready(function () {
      //shared variable
      var max = 0,
          $els = $('.pricing_list');
      $els.each(function () {
          max = Math.max($(this).height(), max); 
      });

      $els.height(max)
  });


$(function() {

  var minimized_elements = $('.Nieuws_content p');

  minimized_elements.each(function() {
    var t = $(this).text();
    if (t.length < 100) return;

    $(this).html(
      t.slice(0, 400) + '<span>... </span><a href="#" class="readmore">Read More <i class="fas fa-angle-double-right"></i></a>' +
      '<span style="display:none;">' + t.slice(100, t.length) + ' <a href="#" class="readless">Read Less <i class="fas fa-angle-double-right"></i></a></span>'
    );

  });

  $('a.readmore', minimized_elements).click(function(event) {
    event.preventDefault();
    $(this).hide().prev().hide();
    $(this).next().show();
  });

  $('a.readless', minimized_elements).click(function(event) {
    event.preventDefault();
    $(this).parent().hide().prev().show().prev().show();
  });

});


  $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

//new WOW().init();




