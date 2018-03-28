(function($) {
    $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200){
            $('#menu').addClass('animated_menu animated fadeInDown');
            // console.log('fadein');
            $('li.active-link a span').css({'color': 'black'});
            $('#text-brand').css({'color' : 'black'});
            $('li a span').hover(function () {
                $(this).css('color', 'black');
            },
                function () {
                    $(this).css('color', 'rgba(208, 206, 206, 0.5)');
                }  );


        }else {
            $('#menu').removeClass('animated_menu animated fadeOutUp');
            // console.log('fadeout');
            $('li.active-link>a span').css({'color': 'white'});
            $('#text-brand').css({'color' : 'white'});

            $('li a span').hover(function () {
                    $(this).css('color', 'white');
                },
                function () {
                    $(this).css('color', 'rgba(208, 206, 206, 0.5)');
                }  );

        }

    })

    $('#arrowDown').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#briefs").offset().top
        }, 1000);
    });
});
})(jQuery);