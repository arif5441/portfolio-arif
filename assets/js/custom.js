var typed = new Typed(".auto-input", {
    strings: ["", "Hasan Arif", "Software Engineer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

$(document).ready(function() {
  // Filter portfolio items when a filter option is clicked
  $('#portfolio-flters li').on('click', function() {
      $('#portfolio-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      var filterValue = $(this).attr('data-filter');

      // If the filter is set to '*', show all items; otherwise, filter by the selected category
      if (filterValue === '*') {
          $('.portfolio-item').show();
      } else {
          $('.portfolio-item').hide();
          $('.portfolio-item' + filterValue).show();
      }
  });
});

// Clients carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

