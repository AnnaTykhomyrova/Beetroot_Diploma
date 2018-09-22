$(document).ready(function () {

    //Smooth scrolling
    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 900);
    });

    //Slick-slider
    $('.slider').slick({
        autoplay: false,
        dots: true,
        dotsClass: "my-dots",
        prevArrow:'<img class="prev" src="images/left.png">',
        nextArrow:'<img class="next" src="images/right.png">',
        speed: 2000,
        infinite: true
    });

       //Isotope
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

});
