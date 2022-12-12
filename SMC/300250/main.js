const timeline = gsap.timeline({ defaults: { duration: 2 } });
timeline
  .from(".hand", { x: 150, ease: "Power2.easeOut" })
  .from(".product", { y: 125, ease: "Power2.easeOut" }, "<")
  .from(".copy", { x: -200, ease: "Power2.easeOut" }, "<");
timeline.repeatDelay(2);
timeline.repeat(-1);
