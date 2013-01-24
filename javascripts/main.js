(function () {

  var carousel_list;
  var slide;
  var panels;

  function initialize() {
    carousel_list = $(".carousel-nav .carousel-nav-link");
    slide = $(".carousel-slide");
    panels = slide.find('.carousel-panel')
    slide.width(panels.length * 100 + '%')
    addListeners();
    resized()
  }

  function addListeners() {
    var carousel_buttons = carousel_list.find('a')
    var section_links = $(".section-link")

    carousel_buttons.on('click', carouselGallery)

    section_links.not('.horizontal').on('click', scrollTo)

    section_links.on("mouseover", function (event) {
      arrowSlide(event, "mouseover")
    });

    section_links.on("mouseout", function (event) {
      arrowSlide(event, "mouseout")
    });

    $(window).on('resize', resized)
  }

  function carouselGallery(event) {
    event.preventDefault();
    resized()
    var li = $(this).closest('li')
    carousel_list.removeClass('active')
    li.addClass('active')
    var slidePosition = -100 * $(this).data("index");
    slide.css("margin-left", slidePosition + "%");
  }

  function resized(event) {
    var offset = Math.round(slide.width() / panels.length)
    panels.width(offset)
  }

  function arrowSlide(event, state) {
    var target = $(event.target) //cast it as a jquery element
    var img = target.find('img')

    if (!img.length) {
      img = target;
    }

    if (state === "mouseover") {
      img.addClass("over")
    } else {
      img.removeClass("over")
    }
  }

  function scrollTo(event) {
    event.preventDefault()
    var button = $(this)
    var id = button.attr('href')
    var element = $(id)
    var y_pos = element.offset().top
    $('html body').animate({scrollTop: y_pos}, 500)
  }

  initialize()

})()

function processFeed(data) {
  var entry = data.responseData.feed.entries[0];
  var fragment = entry.content.match(/\<p\>([^<]*)<\/p\>/)[1];
  $('#blog_headline').html(entry.title);
  $('#blog_content').html($.trim(fragment).replace(/\.$/, '...'));
}

