// $(function () {
//     var windowSize = $(window).width();

//     // -------------------------------------------------------------------Création effet navbar-------------------------------------------------------
//     if (windowSize > 991) {
//         $(".navbar").css("margin-top", "-20vh");
//         $('#toggle').removeClass("isDown").html("<i class='fa fa-chevron-down fa-2x' ></i>");
//         setInterval(function(){
//             $(".center").stop(true, true).delay(200).fadeIn(200).delay(1000).fadeOut(400); // 200 + 200 + 1000 + 400 = 1800
//         }, 1800);

//         $("#toggle").click(function (event) {
//             event.preventDefault();
//             if ($(this).hasClass("isDown")) {
//                 $(".navbar").animate({
//                     "margin-top": "-20vh"
//                 }, "fast");

//                 $(this).removeClass("isDown").html("<i class='fa fa-chevron-down fa-2x' ></i>");
//             } else {
//                 $(".navbar").animate({
//                     "margin-top": "0"
//                 }, "fast");

//                 $(this).addClass("isDown").html("<i class='fa fa-chevron-up fa-2x' ></i>");
//             }
//             return false;
//         });
//     } 

// })
$(function () {
    var windowSize = $(window).width(); // Largeur de l'écran pour gérer le responsive

    if (windowSize > 991) {
        $('.navbar').css('background-color', 'rgba(0, 0, 0, 0)');
        $('.nav-link').css('background-color', 'rgba(0, 0, 0, 0)');
        $('.dropdown-menu').css('background-color', 'rgba(0, 0, 0, 0)');
        $('.dropdown-item').css('background-color', 'rgba(0, 0, 0, 0)');
        $('#logo_navbar').css('display', 'none');
        $(window).scroll(function () {
            // these conditional statements are working fine
            if ($(window).scrollTop() > 500) {
                $('.navbar').css("background-color", "rgba(158, 0, 0, 0.5)");
                $('.nav-link').css('background-color', 'rgba(158, 0, 0, 0.5)');
                $('.dropdown-menu').css('background-color', 'rgba(158, 0, 0, 0.5)');
                $('.dropdown-item').css('background-color', 'rgba(158, 0, 0, 0.5)');
                $('#logo_navbar').css('display', 'block');
            } else {
                $('.navbar').css('background-color', 'rgba(0, 0, 0, 0)');
                $('.nav-link').css('background-color', 'rgba(0, 0, 0, 0)');
                $('#logo_navbar').css('display', 'none');
                $('.dropdown-menu').css('background-color', 'rgba(0, 0, 0, 0)');
                $('.dropdown-item').css('background-color', 'rgba(0, 0, 0, 0)');

                $(".nav-link").hover(
                    function () {
                        $(this).css("background-color", "rgba(158, 0, 0, 0.8)");
                    },
                    function () {
                        $(this).css("background-color", "rgba(0, 0, 0, 0)");
                    }
                );
                $(".dropdown-item").hover(
                    function () {
                        $(this).css("background-color", "rgba(158, 0, 0, 0.8)");
                    },
                    function () {
                        $(this).css("background-color", "rgba(0, 0, 0, 0)");
                    }
                );
            }

        });
    }

});