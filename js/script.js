$(document).ready(function () { // Start Coding Here

    // Preloader

    $(".preloader").fadeOut(2000);

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Smooth Scroll

    $('.container1 ul li a').click(function () {

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // Header Change

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 300) {
            $("header").addClass("change");
        } else {
            $("header").removeClass("change");
        }
    });

    // Menu

    $(".menu").click(function () {
        $(".container1 ul").toggleClass("list");
    });

    // Tabs

    $(".tabs li").click(function () {
        var tab = $(this).attr("tab");
        $("#one , #two , #three , #four , #five , #six , #seven , #eight").hide();
        $("#" + tab).fadeIn();
    });

    $("[tab]").on("click", function () {
        $('[tab]').removeClass('active2');
        $(this).addClass('active2');
    });

    // Tabs1

    $(".tabs1 li").click(function () {
        var tab = $(this).attr("tab1");
        $("#one1 , #two1 , #three1 , #four1 , #five1 , #six1 , #seven1").hide();
        $("#" + tab).fadeIn();
    });

    $("[tab1]").on("click", function () {
        $('[tab1]').removeClass('active1');
        $(this).addClass('active1');
    });

    // Testimonial

    $('#mixedSlider').multislider({
        duration: 500,
        interval: 2000
    });

}); // End Code