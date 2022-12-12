const timeline = gsap.timeline({ defaults: { duration: 2 } });
timeline
  .from(".background", { y: 200, ease: "Power2.easeOut", duration: 2 })
  .fromTo(".slogan", {opacity:0,y: -40},{ opacity:1, y:0, ease: "Power2.easeOut" }, ">-1");
timeline.repeatDelay(2);
timeline.repeat(-1);
