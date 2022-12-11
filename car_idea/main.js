let imgs = [
  {
    src: "./image/1.png",
  },
  {
    src: "./image/2.png",
  },
  {
    src: "./image/3.png",
  },
  {
    src: "./image/4.png",
  },
  {
    src: "./image/5.png",
  },
  {
    src: "./image/6.png",
  },
  {
    src: "./image/7.png",
  },
  {
    src: "./image/8.png",
  },
  {
    src: "./image/9.png",
  },
];
var car = document.querySelector(".car");
var colors = document.querySelector("colors");

let hi = {colors:nth-child("color"+img[i])}
console.log(hi);

// Path: main.js
// array loop
for (let i = 0; i < imgs.length; i++) {
    let img = document.createElement("img");
    // console.log(img);
    img.src = imgs[i].src;
    car.appendChild(img);
    console.log(imgs[i].src);
}