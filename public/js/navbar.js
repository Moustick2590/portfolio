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
        $('.nav-item').css('margin-left', '15px');
        $('.nav-item').css('margin-right', '15px');
        $(".nav-link").hover(
            function () {
                $(this).css("background-color", "rgba(25, 0, 0, 1)");
            },
            function () {
                $(this).css("background-color", "rgba(0, 0, 0, 0)");
            }
        );
        $(".dropdown-item").hover(
            function () {
                $(this).css("background-color", "rgba(25, 0, 0, 1)");
            },
            function () {
                $(this).css("background-color", "rgba(0, 0, 0, 0)");
            }
        );
        $(window).scroll(function () {
            // these conditional statements are working fine
            if ($(window).scrollTop() > 500) {
                $('.nav-item').css('margin-left', '15px');
                $('.nav-item').css('margin-right', '15px');
            } else {
                $(".nav-link").hover(
                    function () {
                        $(this).css("background-color", "rgba(25, 0, 0, 1)");
                    },
                    function () {
                        $(this).css("background-color", "rgba(0, 0, 0, 0)");
                    }
                );
                $(".dropdown-item").hover(
                    function () {
                        $(this).css("background-color", "rgba(25, 0, 0, 1)");
                    },
                    function () {
                        $(this).css("background-color", "rgba(0, 0, 0, 0)");
                    }
                );
            }

        });
    }

});