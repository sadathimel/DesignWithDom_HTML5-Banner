var car = document.querySelector(".car img");
var colors = document.querySelector(".pph_colors");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var color7 = document.querySelector(".color7");
var color8 = document.querySelector(".color8");
var color9 = document.querySelector(".color9");

var textImg = document.querySelector(".text img");

var click = true;

function carcolor() {
  if (click === true) {
    click = false;
    var className = this.className;

    document.querySelectorAll(".color").forEach((e) => {
      e.classList.remove("caroutline");
    });

    car.src = "./image/" + className.charAt(5) + ".png";
    this.className = className + " caroutline";

    const timeline = gsap.timeline({
      defaults: { duration: 0.5 },
      onComplete: function () {
        click = true;
      },
    });
    timeline
      // .from(".car", {z:9, x: 200, ease: "Power2.easeOut", duration: 2 })
      .from(".car", {
        x: 200,
        rotationX: 45,
        scaleX: 1,
        z: -22,
        ease: "Power2.easeOut",
        duration: 1,
      });
  }
}

gsap.to(".text", 0.8, {
  scaleX: 1.1,
  repeat: -1,
  ease: Power0.easeNone,
});

color1.addEventListener("click", carcolor);
color2.addEventListener("click", carcolor);
color3.addEventListener("click", carcolor);
color5.addEventListener("click", carcolor);
color6.addEventListener("click", carcolor);
color7.addEventListener("click", carcolor);
color8.addEventListener("click", carcolor);
color9.addEventListener("click", carcolor);
