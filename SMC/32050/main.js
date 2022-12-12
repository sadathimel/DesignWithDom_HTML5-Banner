const timeline = gsap.timeline({ defaults: { duration: 2 } });
timeline
  .from(".hand", { y: 150, ease: "Power2.easeOut" })
  .from(".product", { x: 225, ease: "Power2.easeOut" }, "<")
  .from(".copy", { x: -210, ease: "Power2.easeOut" }, "<");
timeline.repeatDelay(2);
timeline.repeat(-1);
