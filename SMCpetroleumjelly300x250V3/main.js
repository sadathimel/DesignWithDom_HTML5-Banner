const timeline = gsap.timeline({ defaults: { duration: 2.5 } });
timeline
  .from(".hand", { x: 150, ease: "bounce.out" })
  .from(".product", { x: -250, ease: "bounce.out" }, "<")
  .from(".text", { y: -150, ease: "bounce.out" }, "<.1");
timeline.repeatDelay(2);
timeline.repeat(-1);
