
		$(function () {
            $(".box-hidden").slice(0, 6).show();
            $("#loadMore").on('click', function (e) {
                e.preventDefault();
                $(".box-hidden:hidden").slice(0, 2).slideDown();
                if ($(".box-hidden:hidden").length == 0) {
                    $("#load").fadeOut('slow');
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1500);
            });
        });


        $(function () {
            $(".ux-hidden").slice(0, 6).show();
            $("#loadMoreUx").on('click', function (e) {
                e.preventDefault();
                $(".ux-hidden:hidden").slice(0, 2).slideDown();
                if ($(".ux-hidden:hidden").length == 0) {
                    $("#load").fadeOut('slow');
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1500);
            });
        });

        $('.owl-carousel').owlCarousel({
            
            autoplayTimeout: 3000,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:1
                }
            }
        })


