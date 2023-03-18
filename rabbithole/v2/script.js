creativeLoaded();

var carousel,currentSlide;

function creativeLoaded() {

    var props = {
        width: 300,
        height: 250,
        slideLayout: 'fill',
        animation: 'slide3D',
        animationCurve: 'ease',
        animationDuration: 2000,
        animationInterval: 5000,
        slideClass: 'slide',
        autoplay: true,
        controls: true,
        navigation: 'circles',
        perspective: 1200,
        rotationDirection: 'rtl',
        onSlideShow: slideShownCallback

    };

    var t = new TimelineMax({paused: true});

    t.from('#hand',1.5,{opacity: 0, y:'-25px',ease: Elastic.easeOut})


    function slideShownCallback($slide){
        // TweenMax.to('.cta',0,{opacity: 0})
        currentSlide = $slide.attr('data-index');
        console.log(currentSlide);

        if(currentSlide == 0){
            t.restart();
        }else if(currentSlide == 1){
            TweenMax.from('.t2',.5,{opacity: 0,y:30,delay: .9})
        }else if(currentSlide == 2){
                TweenMax.from('.t3',.5,{opacity: 0,y:30,delay: .9})
        }else if(currentSlide == 3){
            TweenMax.from('.t4',.5,{opacity: 0,y:30,delay: .9})
        }
    }

    
    carousel = $('.Cube_templete').jR3DCarousel(props);
}


