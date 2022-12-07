const timeline = gsap.timeline({ defaults: { duration: 1.5 } });
timeline
  .from(".element_2", { y: 20, ease: "bounce.out" })
  .fromTo(".element_3", { y: 100 }, { y: 0, ease: "bounce.out" })
  .to(".element_3", { y: 0, opacity: 0 })
  .fromTo(".element_4", { y: 100 }, { y: 0, ease: "bounce.out" }, "<.1")
  .to(".element_4", { y: 0, opacity: 0 })
  .fromTo(".element_5", { y: 100 }, { y: 0, ease: "bounce.out" }, "<.1")
  .to(".element_5", { y: 0, opacity: 0 })
  .fromTo(".element_1, .element_2", { opacity: 1 }, { opacity: 0 })
  .from(".element_6", { y: 100 }, "<.1")
  .fromTo(".element_7", { y: 100, scale: 0.9 }, { y: 0, scale: 1 })
  .to(".element_7", 0.6, {
    scale: 1.06,
    repeat: 4,
    yoyo: true,
    ease: Power0.easeNone,
  });
timeline.repeat(-1);
