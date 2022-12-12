var car = document.querySelector(".car img");
var colors = document.querySelector(".pph_colors");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var color7 = document.querySelector(".color7");
var color8 = document.querySelector(".color8");
var color9 = document.querySelector(".color9");

function sadat() {
  var className = this.className;
  car.src = "./image/" + className.charAt(className.length - 1) + ".png";
}

color1.addEventListener("click", sadat);
color2.addEventListener("click", sadat);
color3.addEventListener("click", sadat);
color4.addEventListener("click", sadat);
color5.addEventListener("click", sadat);
color6.addEventListener("click", sadat);
color7.addEventListener("click", sadat);
color8.addEventListener("click", sadat);
color9.addEventListener("click", sadat);
