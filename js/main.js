

$(document).ready(function(){
    
    // mwnu search button

    $('.search-item').click(function(){
        $('#toggleBox').fadeToggle(1000);
    });

    // menu bar effect

    $('.menu-bars').click(function(){
        $('.menu').slideToggle(700);
    });






    // Background Slider Plagin

    $('.slide-background').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        smartSpeed:900,
        autoplayTimeout:10000,
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
    })

    // Counter Plagin

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    // Sticky Plagin

    $('.navbar').sticky();

    //animation

    


    $(window).scroll(function(){
        var slideAnimation = $(document).scrollTop();
        console.log(slideAnimation);

        // rule
        // if((slideAnimation > 200) && (slideAnimation < 850)){
        //     $('.single-box').addClass('single-box-animation');
        // }

        // what we do section animation

        if((slideAnimation > 200)){
            $('.single-box').addClass('single-box-animation');
        }
        
        // work section animation

        if((slideAnimation > 600)){
            $('.Work-section.pt.pb').addClass('work-slide-up');
        }

        // form section animation

        if((slideAnimation > 1840)){
            $('.single-form').addClass('single-form-animation');
        }

        // price plan section animation

        if((slideAnimation > 2400)){
            $('.single-price-plan').addClass('single-price-plan-animation');
        }

        // check out section animation

        if((slideAnimation > 3100)){
            $('.check-out-content').addClass('check-out-animation');
        }

        if((slideAnimation > 3200)){
            $('.single-check-out').addClass('single-check-out-animation');
        }

        // team section animation

        if((slideAnimation > 3600)){
            $('.row-wrap').addClass('row-wrap-animation');
        }

        // news section animation

        if((slideAnimation > 5300)){
            $('.single-news').addClass('single-news-animation');
        }

        // Scroll Animation
        
        if((slideAnimation > 100)){
            $('#scroll').fadeIn(1000);
        }else{
            $('#scroll').fadeOut(1000);
        }
        
    });

    // Scroll Animation

    $('#scroll').click(function(){
        $('html,body').animate({scrollTop: 0}, 1000)
    });


  });

  