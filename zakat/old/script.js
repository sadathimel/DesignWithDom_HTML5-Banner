var wrapper = document.querySelector(".wrapper");
var slide_1 = document.querySelector(".slide_1");
var slide_2 = document.querySelector(".slide_2");
var slide_3 = document.querySelector(".slide_3");
var slide_4 = document.querySelector(".slide_4");
var logo_1_1 = document.querySelector(".logo_1_1");
var zakat_slide = document.querySelector(".zakat_slide");

var logo_1_2 = document.querySelector(".logo_1_2");
var image_2_1 = document.querySelector(".image_2_1");
var image_2_2 = document.querySelector(".image_2_2");
var image_3_1 = document.querySelector(".image_3_1");
var image_3_2 = document.querySelector(".image_3_2");
var image_3_3 = document.querySelector(".image_3_3");
var register = document.querySelector(".register");
var button = document.querySelector(".button");
var back = document.querySelector(".back");
// amount
var property1 = document.querySelector(".property1");
var property2 = document.querySelector(".property2");
var zakat = document.querySelector(".zakat");
var mobile = document.querySelector(".mobile");
var propertyOne = document.querySelector(".one");
var propertyTwo = document.querySelector(".two");
var res;


    show_slide_1();
    function show_slide_1() {
        slide_1.className = slide_1.className.replace('hidden', '');
        slide_1.classList ? slide_1.classList.add('fadeIn') : slide_1.className += ' fadeIn';
        slide_2.classList ? slide_2.classList.add('hidden') : slide_2.className += ' hidden';
        slide_3.classList ? slide_3.classList.add('hidden') : slide_3.className += ' hidden';
        
        setTimeout(function() {
            logo_1_2.className = logo_1_2.className.replace('hidden', '');
            logo_1_2.classList ? logo_1_2.classList.add('fadeIn') : logo_1_2.className += ' fadeIn';
            setTimeout(function() {
                logo_1_1.className = logo_1_1.className.replace('hidden', '');
                logo_1_1.classList ? logo_1_1.classList.add('fadeInZoom') : logo_1_1.className += ' fadeInZoom';
                    setTimeout(function() {
                        // show_slide_2();
                    }, 1000);
            }, 200);
        }, 200);
    }
    logo_1_2.addEventListener('click', show_slide_2);


    function show_slide_2() {
        slide_1.classList ? slide_1.classList.add('hidden') : slide_1.className += ' hidden';
        slide_2.className = slide_2.className.replace('hidden', '');
        slide_2.classList ? slide_2.classList.add('fadeInZoom') : slide_2.className += ' fadeInZoom';
        slide_3.classList ? slide_3.classList.add('hidden') : slide_3.className += ' hidden';

        
        setTimeout(function() {
            image_2_1.className = image_2_1.className.replace('hidden', '');
            image_2_1.classList ? image_2_1.classList.add('fadeIn') : image_2_1.className += ' fadeIn';

            image_2_2.className = image_2_2.className.replace('hidden', '');
            image_2_2.classList ? image_2_2.classList.add('fadeInUp') : image_2_2.className += ' fadeInUp';

            propertyOne.addEventListener('mouseenter',function(){
                document.querySelector(".d_property1").style.display = "block";
            })
            propertyTwo.addEventListener('mouseenter',function(){
                document.querySelector(".d_property2").style.display = "block";
            })

            image_2_2.addEventListener('click', function(){
                var total = (Number(property1.value) + Number(property2.value)); 
                res = total * (1 / 40);
                zakat.innerText =  total > 23000 ? Math.round(res) : 0 ;

                setTimeout(show_zakat_slide, 300);
            });
        }, 400);
    }

    function show_zakat_slide(){
        slide_2.classList ? slide_2.classList.add('hidden') : slide_2.className += ' hidden';
        zakat_slide.className = zakat_slide.className.replace('hidden', '');
        zakat_slide.classList ? zakat_slide.classList.add('fadeIn') : zakat_slide.className += ' fadeIn';


        setTimeout(show_slide_3, 5e3);
    }

    function show_slide_3(){
        slide_3.className = slide_3.className.replace('hidden', '');
        slide_3.classList ? slide_3.classList.add('fadeIn') : slide_3.className += ' fadeIn';

        image_3_2.className = image_3_2.className.replace('hidden', '');
        image_3_2.classList ? image_3_2.classList.add('fadeIn') : image_3_2.className += ' fadeIn';

        image_3_3.className = image_3_3.className.replace('hidden', '');
        image_3_3.classList ? image_3_3.classList.add('fadeIn') : image_3_3.className += ' fadeIn';

        zakat_slide.classList ? zakat_slide.classList.add('hidden') : zakat_slide.className += ' hidden';
    }

    back.addEventListener('click', show_slide_2);

    function show_slide_4(){
        if(mobile.value.match(/^(\+88)?([017|018|019|016|015]{3})([0-9]{8})+$/)){
            slide_3.classList ? slide_3.classList.add('hidden') : slide_3.className += ' hidden';
            slide_4.className = slide_4.className.replace('hidden', '');
            slide_4.classList ? slide_4.classList.add('fadeIn') : slide_4.className += ' fadeIn';
            // window.location.href = "//ms.purplepatch.online/starcom/zakat/sms.php?mobile=" + mobile.value + '&' + 'zakat='+res+'&from=wizards';
        }else{
            console.log('something wrong');
        }
    }
    button.addEventListener('click', show_slide_4);