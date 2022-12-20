const timeline = gsap.timeline({ defaults: { duration: 2 } });
timeline
  .from(".hand", { y: 150, ease: "Power2.easeOut" })
  .from(".product", { y: -225, ease: "Power2.easeOut" }, "<")
  .from(".copy", { y: -210, ease: "Power2.easeOut" }, "<");
timeline.repeatDelay(2);
timeline.repeat(-1);
