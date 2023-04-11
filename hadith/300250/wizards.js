let wrapper = document.querySelector(".wrapper");
let slide_1 = document.querySelector(".slide_1");
let slide_2 = document.querySelector(".slide_2");
let slide_3 = document.querySelector(".slide_3");

let element_1_1 = document.querySelector(".element_1_1");
let element_1_2 = document.querySelector(".element_1_2");
let element_1_3 = document.querySelector(".element_1_3");
let element_1_4 = document.querySelector(".element_1_4");
let element_1_5 = document.querySelector(".element_1_5");

let element_2_1 = document.querySelector(".element_2_1");
let element_2_2 = document.querySelector(".element_2_2");
let element_2_3 = document.querySelector(".element_2_3");
let element_2_4 = document.querySelector(".element_2_4");
let element_2_5 = document.querySelector(".element_2_5");

let element_3_1 = document.querySelector(".element_3_1");
let element_3_2 = document.querySelector(".element_3_2");

let audio = new Audio('300250/audio.mp3');

    lincoln();
    function lincoln(){
        slide_1.className = slide_1.className.replace('hidden', '');
        setTimeout(()=>{
            element_1_1.className = element_1_1.className.replace('hidden', '');
            element_1_1.classList ? element_1_1.classList.add('fadeInZoom') : element_1_1.className += ' fadeInZoom';
                setTimeout(()=>{
                    element_1_2.className = element_1_2.className.replace('hidden', '');
                    element_1_2.classList ? element_1_2.classList.add('fadeInBottom') : element_1_2.className += ' fadeInBottom';

                    element_1_3.className = element_1_3.className.replace('hidden', '');
                    element_1_3.classList ? element_1_3.classList.add('fadeInZoom') : element_1_3.className += ' fadeInZoom';

                    setTimeout(()=>{
                        element_1_4.className = element_1_4.className.replace('hidden', '');
                        element_1_4.classList ? element_1_4.classList.add('fadeInLeft') : element_1_4.className += ' fadeInLeft';
                        element_1_5.className = element_1_5.className.replace('hidden', '');
                        element_1_5.classList ? element_1_5.classList.add('fadeInBottom') : element_1_5.className += ' fadeInBottom';
                        setTimeout(()=>{
                            element_1_3.className = element_1_3.className.replace('fadeInZoom', '');
                            element_1_3.classList ? element_1_3.classList.add('tabPulse') : element_1_3.className += ' tabPulse';


                        },300);
                    },200);
                },200);             
        },200);
    }


    function mahmud(){

        setTimeout(()=>{
            element_1_5.className = element_1_5.className.replace('fadeInZoom', '');
            element_1_5.classList ? element_1_5.classList.add('hidden') : element_1_5.className += ' hidden';
                setTimeout(lincoln,1e3);

                setTimeout(()=>{
                    element_1_4.className = element_1_4.className.replace('fadeInBottom', '');
                    element_1_4.classList ? element_1_4.classList.add('hidden') : element_1_4.className += ' hidden';


                    element_1_3.className = element_1_3.className.replace('fadeInZoom', '');
                        element_1_3.classList ? element_1_3.classList.add('hidden') : element_1_3.className += ' hidden';

                    setTimeout(()=>{
                        element_1_1.className = element_1_1.className.replace('fadeInLeft', '');
                        element_1_1.classList ? element_1_1.classList.add('hidden') : element_1_1.className += ' hidden';
                        element_1_2.className = element_1_2.className.replace('fadeInBottom', '');
                        element_1_2.classList ? element_1_2.classList.add('hidden') : element_1_2.className += ' hidden';
                        
                    },500);
                },500);             
        },200);
    }


    setInterval(function(){
        // if (!played) { mahmud(); }
    },5e3);


    var played=false;
    
    slide_1.addEventListener("click",function(){
        audio.play();
        slide_two();
        played=true;  
    })

    function slide_two(){
        wrapper.style.backgroundImage='url(//ms.purplepatch.online/banglalink/ramadan/audible/300250/bg2.jpg)';
        
        slide_1.classList ? slide_1.classList.add('hidden') : slide_1.className += ' hidden';
        slide_2.className = slide_2.className.replace('hidden', '');
        setTimeout(()=>{
            slide_1.classList ? slide_1.classList.add('hidden') : slide_1.className += ' hidden';
            element_2_1.className = element_2_1.className.replace('hidden', '');
            element_2_1.classList ? element_2_1.classList.add('fadeInZoom') : element_2_1.className += ' fadeInZoom';
            setTimeout(()=>{
                 element_2_2.className = element_2_2.className.replace('hidden', '');
                    element_2_2.classList ? element_2_2.classList.add('fadeInBottom') : element_2_2.className += ' fadeInBottom';

                 element_2_3.className = element_2_3.className.replace('hidden', '');
                    element_2_3.classList ? element_2_3.classList.add('fadeInUp') : element_2_3.className += ' fadeInUp';

                    setTimeout(()=>{
                        element_2_4.className = element_2_4.className.replace('hidden', '');
                        element_2_4.classList ? element_2_4.classList.add('fadeInBottom') : element_2_4.className += ' fadeInBottom';

                        element_2_5.className = element_2_5.className.replace('hidden', '');
                        element_2_5.classList ? element_2_5.classList.add('fadeInBottom') : element_2_5.className += ' fadeInBottom';
                        audio.addEventListener("ended", slide_three);
                    },200)
            },200);          
        },200);
    }

    function slide_three(){
        slide_2.classList ? slide_2.classList.add('hidden') : slide_2.className += ' hidden';
        slide_3.className = slide_3.className.replace('hidden', '');
        slide_3.style.zIndex='999';
        slide_3.style.cursor="pointer";

        setTimeout(()=>{
            element_3_1.className = element_3_1.className.replace('hidden', '');
            element_3_1.classList ? element_3_1.classList.add('fadeInZoom') : element_3_1.className += ' fadeInZoom';
            setTimeout(()=>{
                element_3_2.className = element_3_2.className.replace('hidden', '');
                element_3_2.classList ? element_3_2.classList.add('fadeInZoom') : element_3_2.className += ' fadeInZoom';
            },200);
        },200);                    
    }

    element_2_4.addEventListener("click",function(){
        audio.play();
        element_2_4.querySelector("img").style.filter="opacity(.5) drop-shadow(0 0 0 red) sepia(10%)";
        setTimeout(()=>{
            element_2_4.querySelector("img").style.filter="none";
        },1e3);
    })

    element_2_5.addEventListener("click",function(){
        audio.pause();
        element_2_5.querySelector("img").style.filter="opacity(.5) drop-shadow(0 0 0 red) sepia(10%)";
        setTimeout(()=>{
            element_2_5.querySelector("img").style.filter="none";
        },1e3);
    })


element_3_1.addEventListener("click",()=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
        }
    };
    xhttp.open("POST", '//ms.purplepatch.online/banglalink/ramadan/audible/clicks/index.php', true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
});


var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isSafari && iOS) {
    console.log("You are using Safari on iOS!");
} else if(isSafari) {
    console.log("You are using Safari.");
}else{
    console.log("you are using android");
}

