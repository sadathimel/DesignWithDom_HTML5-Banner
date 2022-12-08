const timeline = gsap.timeline({ defaults: { duration: 2.5 } });
timeline
  .from(".hand", { x: 150, ease: "Power2.easeOut" })
  .from(".product", { y: 125, ease: "Power2.easeOut" }, "<")
  .from(".text", { y: -125, ease: "Power2.easeOut" }, "<.5");
timeline.repeatDelay(2);
timeline.repeat(-1);
