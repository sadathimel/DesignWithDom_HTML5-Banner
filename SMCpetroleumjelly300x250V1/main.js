const timeline = gsap.timeline({ defaults: { duration: 2.5 } });
timeline
  .from(".hand", { y: 150, ease: "bounce.out" })
  .from(".product", { y: -250, ease: "bounce.out" }, "<")
  .fromTo(
    ".text",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2.3 },
    "<.5"
  );
timeline.repeatDelay(2);
timeline.repeat(-1);
