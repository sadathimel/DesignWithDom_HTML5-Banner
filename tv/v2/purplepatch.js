const left = document.querySelector("#left_panel");
const right = document.querySelector("#right_panel");
const tab = document.querySelector("#zip_tab");
var perc = 4.631828978622328;

tab.addEventListener(
  "touchmove",
  function (event) {
    event.preventDefault();
    var touch = event.touches[0].clientY;
    if (touch < 0) {
      touch = 0;
    }

    if (perc > 1) {
      $("#zip_tab").removeClass("updown");
      // $("#zip_tab").addClass('overflow');
    } else {
      $("#zip_tab").addClass("updown");
    }

    var touch_perc = (touch / window.innerHeight) * 100;
    if (touch_perc > 20.267993874425727) {
      touch_perc = 20.267993874425727;

      // $("#zip_tab").addClass('overflow');

      setTimeout(() => {
        $("#left_panel").addClass("hidden");
        $("#right_panel").addClass("hidden");

        $("#zip_tab").remove();
        $(".slider1").remove();
        setTimeout(() => {
          $(".slider2").removeClass("hidden").addClass("zoomIn");
          setTimeout(() => {
            $(".slider3").removeClass("hidden");
            $(".slider2").addClass("hidden");
          }, 5000);
        }, 0);
      }, 500);
    }

    document.documentElement.style.setProperty(
      "--open",
      touch_perc * 2.2 + "%"
    );
    tab.style.top = touch_perc + "%";
  },
  false
);

dragElement(tab);
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    tab.classList.toggle("grabbing");
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos2 = pos4 - e.clientY;
    pos4 = e.clientY;
    // set the element's new position:
    var newY = elmnt.offsetTop - pos2;
    var perc = ((elmnt.offsetTop - pos2) / window.innerHeight) * 100;
    console.log(perc);
    if (perc < 0) {
      perc = 0;
    }

    if (perc > 1) {
      $("#zip_tab").removeClass("updown");
    } else {
      $("#zip_tab").addClass("updown");
    }

    if (perc > 23.267993874425727) {
      perc = 23.267993874425727;
      // $("#zip_tab").addClass('overflow');

      setTimeout(() => {
        $("#left_panel").addClass("hidden");
        $("#right_panel").addClass("hidden");

        $("#zip_tab").remove();
        $(".slider1").remove();
        setTimeout(() => {
          $(".slider2").removeClass("hidden").addClass("zoomIn");
          setTimeout(() => {
            $(".slider3").removeClass("hidden");
            $(".element_6").addClass("slide-left");
            $(".slider2").addClass("hidden");
          }, 5000);
        }, 0);
      }, 500);
    }
    // $(".slider2").removeClass('.hidden');
    // $(".slider2").addClass('.fadeInZoom');

    elmnt.style.top = perc + "%";
    document.documentElement.style.setProperty("--open", perc * 2.2 + "%");
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    tab.classList.toggle("grabbing");
  }
}

// function abc() {
//   $(".element_5").addClass("hidden");
//   $(".element_6").addClass("hidden");
//   $(".element_7").addClass("hidden");
//   $(".slider3").addClass("hidden");
//   setTimeout(slide_2, false);
//   function slide_2() {
//     $(".element_1").addClass("spring");
//     // $(".element_2").addClass("spring1");
//     $(".element_3").addClass("spring");
//     $(".element_4").addClass("circle");
//     $(".element_5").addClass("offer");

//     setTimeout(function () {
//       $(".element_1").removeClass("spring");
//       $(".element_3").removeClass("spring");
//       $(".element_4").removeClass("circle");

//       setTimeout(function () {
//         $(".element_1").addClass("hidden");
//         $(".element_3").addClass("hidden");
//         $(".element_4").addClass("hidden");
//         $(".element_5").removeClass("hidden");
//         $(".element_6").removeClass("hidden");
//         $(".element_7").removeClass("hidden");
//         setTimeout(function () {
//           slide_2();
//         }, 10);
//       }, 100);
//     }, 5000);
//   }
// }
