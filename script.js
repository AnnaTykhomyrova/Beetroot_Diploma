$(document).ready(function () {

    // Counters
    function isScrolledIntoView(el) {
        var elemTop = el.getBoundingClientRect().top;
        var elemBottom = el.getBoundingClientRect().bottom;

        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }

    $(window).on('scroll', function() {
        if (isScrolledIntoView(document.getElementById('counters'))) {
            $('.counters').countTo();

            // Unbind scroll event
            $(window).off('scroll');
        }
    });


    // Smooth scrolling
    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1500);
    });


    // Slick-slider
    $('.slider').slick({
        autoplay: false,
        dots: true,
        dotsClass: "my-dots",
        prevArrow:'<img class="prev" src="images/left.png">',
        nextArrow:'<img class="next" src="images/right.png">',
        speed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                }
            }
        ]
    });


       // Isotope
    var $isotopeGrid = $('.isotop_container');

    $isotopeGrid.isotope({
        itemSelector: '.img-wrapper',
        percentPosition: true,
        laytoutMode:'fitRows'
    });

    $('.all_isotop_container .filter a').click(function () {
        var filterValue = $(this).data('filter');

        $isotopeGrid.isotope({
            filter: filterValue
        });
    });
    $('.links').on('click', function(e){
        e.preventDefault();})


    // menu
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu')
                .toggleClass('menu_state_open');
        });

        $('.menu__links-item').on('click', function() {


            $(this).closest('.menu')
                .removeClass('menu_state_open');
        });
    });


    // ninth section Recent Posts.
    $(".link").click(function(){
        $(".block").slideToggle(true);
    });
    $(".link2").click(function(){
        $(".block2").slideToggle(true);
    });
    $(".link3").click(function(){
        $(".block3").slideToggle(true);
    });


    // eleventh section Before footer
    $(".read_more11").click(function(){
        $(".hidden").slideToggle(true);
    });

    // sixth section Waxom Video Presentation
    $(".play_video img").click(function(){
        $("iframe").slideToggle("slow");
        $(".play_video").hide();
    });


    // fixed scroll top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
});
