function initIFrame() {
  events();
  dragLoop();
  prepBox();
  setCss();
  goOut();

  // screenCanvas();

  loop();
  initDrag();

  onResize();

  getGlobalS();

  initAnim();
}

function getGlobalS() {
  var maz = pp_h.screen.w < pp_h.screen.h ? pp_h.screen.w : pp_h.screen.h;
  ad_s = (pp_h.globalScale * maz) / pp_h.w;
  if (ad_s > 1) ad_s = 1;
}

function events() {
  pp_h.screen.w = _window.innerWidth;
  pp_h.screen.h = _window.innerHeight;
  _window.addEventListener("resize", onResize);
}

var ad_s = 1;

function onResize() {
  var w = _window.innerWidth;
  var h = _window.innerHeight;
  var c = pp_h.canvas;

  // c.width = w;
  // c.height = h;
  // c.style.width = w;
  // c.style.height = h;
  pp_h.screen.w = w;
  pp_h.screen.h = h;

  getGlobalS();

  // console.log( ad_s )
  gsap.set(pp.container, {
    scale: ad_s,
    transformOrigin: "100% 100%",
  });
}

function screenCanvas() {
  var c = document.createElement("CANVAS");
  c.width = _window.innerWidth;
  c.height = _window.innerHeight;
  c.style.width = _window.innerWidth;
  c.style.height = _window.innerHeight;
  c.style.position = "fixed";
  c.style.zIndex = 9999998;
  c.style.top = "0px";
  c.style.bottom = "0px";
  c.style.left = "0px";
  c.style.right = "0px";
  c.style.pointerEvents = "none";

  pp_h.canvas = c;
  pp_h.ctx = c.getContext("2d");

  var body = _document.getElementsByTagName("body")[0];
  body.appendChild(c);
}

function initCircles() {
  for (var i = 0; i < pp_h.circles.amm; i++) {
    pp_h.circles.list.push({});
    createCircle(i);
  }
}

function showCTA() {
  gsap.set(pp.cta, {
    opacity: 1,
    scale: 0,
    transformOrigin: "50% 90%",
  });
  gsap.to(pp.cta, 0.35, {
    delay: 0.7,
    scale: 1,
    ease: Back.easeOut,
    transformOrigin: "50% 90%",
    onComplete: function () {
      gsap.to(pp.cta, 0.35, {
        scale: 0.9,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.05,
      });
    },
  });
}

// function showNEXT(mode){
// 	if(mode){
//     gsap.set(pp.next, {opacity: 1, scale: 0, transformOrigin: "50% 90%"})
//     gsap.to(pp.next, 0.35, {delay: 0.7, scale: 1, ease: Back.easeOut, transformOrigin: "50% 90%", onComplete: function(){
//    pp_h.nextTl = gsap.to(pp.next, 0.35, { scale: 0.9, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 0.05, })
//     }})
//   } else {
//   	gsap.to(pp.next, {scale: 0, ease: Back.easeIn, onComplete: function(){
//   		pp_h.nextTl.kill();
//   	}})
//   }
// }

function hideBTN() {
  gsap.to(pp.shake_text, 0.35, {
    scale: 0,
    ease: Back.easeIn,
    transformOrigin: "50% 85%",
    onComplete: function () {
      if (pp_h.shakeTl) pp_h.shakeTl.kill();
    },
  });
}

function initAnim() {
  gsap.set(pp.cta_cont, {
    left: 12,
    top: 95 + 50,
    scale: 0.7,
    opacity: 1,
  });
  gsap.set(pp.cta, {
    scale: 0,
  });
  gsap.set(pp.cta_arrow, {
    left: 160,
    top: 10,
    x: -5,
  });

  gsap.set([pp.cart_shadow, pp.cart, pp.cart_arm], {
    scale: 0.9,
  });
  gsap.set([pp.cart_arm], {
    scale: 0.9,
    transformOrigin: "9% 80%",
  });
  gsap.set([pp.logo], {
    scale: 0.38,
    x: -43,
    y: 28,
  });
  gsap.set(pp.cart_arm, {
    x: 90,
    y: -21,
  });

  var y = -pp_h.screen.h / ad_s;
  // console.log( y, ad_s )
  // y = 0;

  gsap.set(pp.laptop2, {
    top: -46,
    left: 90,
    rotation: 200 * (0.5 - Math.random()),
  });
  gsap.set(pp.watch2, {
    top: -35,
    left: 73,
    rotation: 200 * (0.5 - Math.random()),
  });
  gsap.set(pp.laptop, {
    top: -90,
    left: 40,
    rotation: 200 * (0.5 - Math.random()),
  });
  gsap.set(pp.watch, {
    top: -52,
    left: 0,
    rotation: 200 * (0.5 - Math.random()),
  });
  gsap.set(pp.phone, {
    top: -57,
    left: -15,
    rotation: 250 * (0.5 - Math.random()),
  });

  gsap.set([pp.watch, pp.phone], {
    scale: 0.4,
  });
  gsap.set([pp.watch2], {
    scale: 0.5,
  });
  gsap.set([pp.laptop, pp.laptop2], {
    scale: 0.45,
  });
  gsap.set([pp.watch, pp.phone, pp.laptop, pp.watch2, pp.laptop2], {
    y: y,
  });

  // gsap.set(pp.bg1, {autoAlpha: 1});

  CustomEase.create(
    "e0",
    "M0,0 C0.128,0.572 0.263,0.926 0.518,1 0.678,1.046 0.838,1 1,1"
  );

  // gsap.set(pp.can, {scale: 1, x: 0, y: 0, transformOrigin: "13% 50%"});
  gsap.set(pp.cartCont, {
    opacity: 1,
  });
  gsap.set(pp.wrapper, {
    top: 0,
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "50% 50%",
  });
  gsap.from(pp.wrapper, 0.75, {
    delay: 0.1,
    rotation: 180,
    scale: 0,
    ease: "e0",
    onStart: function () {},
    onComplete: function () {
      dropAnim();

      pp_h.arrowTimeout = setTimeout(function () {
        gsap.to(pp.cta, 0.55, {
          scale: 1,
          ease: "back.out",
          onComplete: function () {
            pp_h.arrowTl = gsap.to(pp.cta_arrow, {
              x: 5,
              ease: "power1.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        });
      }, 2300);
    },
  });

  gsap.from(pp.cart_arm, 1, {
    delay: 0.1,
    rotation: 100,
    ease: "back.out",
  });

  pp_h.wrapperTl = gsap.to(pp.wrapper, 1, {
    y: 30,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });

  // setTimeout(startSpawn, 1000);

  // gsapgs
}

function dropAnim() {
  pp_h.dropTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 10,
  });

  var dur = 0.65;
  var ease = "none";

  pp_h.dropTl.to(pp.phone, dur, {
    y: 0,
    rotation: -10,
    ease: ease,
    onStart: function () {
      gsap.set(pp.phone, {
        opacity: 1,
      });
    },
    onComplete: function () {
      gravityCart();
    },
  });
  pp_h.dropTl.to(pp.laptop, dur, {
    y: 0,
    rotation: 4,
    ease: ease,
    onStart: function () {
      gsap.set(pp.laptop, {
        opacity: 1,
      });
    },
    onComplete: function () {
      gravityCart();
    },
  });
  pp_h.dropTl.to(pp.watch2, dur, {
    y: 0,
    rotation: 0,
    ease: ease,
    onStart: function () {
      gsap.set(pp.watch, {
        opacity: 1,
      });
    },
    onComplete: function () {
      gravityCart();
    },
  });
  pp_h.dropTl.to(pp.watch, dur, {
    y: 0,
    rotation: -15,
    ease: ease,
    onStart: function () {
      gsap.set(pp.watch, {
        opacity: 1,
      });
    },
    onComplete: function () {
      gravityCart();
    },
  });
  pp_h.dropTl.to(pp.laptop2, dur, {
    y: 0,
    rotation: 5,
    ease: ease,
    onStart: function () {
      gsap.set(pp.laptop2, {
        opacity: 1,
      });
    },
    onComplete: function () {
      gravityCart();
      setTimeout(dropProducts, 3000);
    },
  });
}

function dropProducts() {
  gsap.to(pp.cart_arm, 0.3, {
    rotation: -20,
    ease: "back.in",
    onComplete: function () {
      gsap.to(pp.cart_arm, 0.8, {
        rotation: -0,
      });
    },
  });

  gsap.to(pp.cartCont, 0.3, {
    y: -50,
    ease: "back.in",
    onComplete: function () {
      gsap.to(pp.cartCont, 0.8, {
        y: 0,
      });

      gsap.to(pp.phone, 1.1, {
        rotation: "+=360",
        ease: "none",
      });
      gsap.to(pp.watch, 1.2, {
        delay: 0.1,
        rotation: "+=360",
        ease: "none",
      });
      gsap.to(pp.laptop, 1.3, {
        delay: 0.2,
        rotation: "+=360",
        ease: "none",
      });
      gsap.to(pp.watch2, 1.2, {
        delay: 0.1,
        rotation: "+=360",
        ease: "none",
      });
      gsap.to(pp.laptop2, 1.3, {
        delay: 0.2,
        rotation: "+=360",
        ease: "none",
      });

      gsap.to(pp.phone, 0.8, {
        y: -100,
        ease: "power2.out",
        onComplete: function () {
          gsap.to(pp.phone, 0.3, {
            y: 0,
            ease: "power1.inOut",
            onComplete: function () {
              gravityCart();
            },
          });
        },
      });

      gsap.to(pp.watch, 0.8, {
        delay: 0.1,
        y: -100,
        ease: "power2.out",
        onComplete: function () {
          gsap.to(pp.watch, 0.3, {
            delay: 0.1,
            y: 0,
            ease: "power1.inOut",
            onComplete: function () {
              gravityCart();
            },
          });
        },
      });

      gsap.to(pp.laptop, 0.8, {
        delay: 0.2,
        y: -100,
        ease: "power2.out",
        onComplete: function () {
          gsap.to(pp.laptop, 0.3, {
            delay: 0.2,
            y: 0,
            ease: "power1.inOut",
            onComplete: function () {
              gravityCart();
            },
          });
        },
      });

      gsap.to(pp.laptop2, 0.8, {
        delay: 0.2,
        y: -100,
        ease: "power2.out",
        onComplete: function () {
          gsap.to(pp.laptop2, 0.3, {
            delay: 0.2,
            y: 0,
            ease: "power1.inOut",
            onComplete: function () {
              gravityCart();
            },
          });
        },
      });

      gsap.to(pp.watch2, 0.8, {
        delay: 0.2,
        y: -100,
        ease: "power2.out",
        onComplete: function () {
          gsap.to(pp.watch2, 0.3, {
            delay: 0.2,
            y: 0,
            ease: "power1.inOut",
            onComplete: function () {
              gravityCart();
            },
          });
        },
      });
    },
  });
}

function gravityCart() {
  gsap.to(pp.cartCont, 0.2, {
    y: 35,
    ease: "power2.out",
    onComplete: function () {
      gsap.to(pp.cartCont, 0.75, {
        y: 0,
        ease: "back.out",
      });
    },
  });

  gsap.to(pp.cart_arm, 0.2, {
    rotation: 16,
    transformOrigin: "9% 80%",
    ease: "power2.out",
    onComplete: function () {
      gsap.to(pp.cart_arm, 0.75, {
        rotation: 0,
        ease: "back.out",
      });
    },
  });
}

function startSpawn() {
  initCircles();

  if (pp_h.box.cur == 0) {
    var dx = 6;
    gsap.set(pp.shake_text, {
      scale: 1.1,
      transformOrigin: "50% 90%",
    });
    gsap.to(pp.shake_text, 1, {
      delay: 0.0,
      opacity: 1,
    });
    pp_h.shakeTl = gsap.to(pp.shake_text, 0.35, {
      scale: 0.95,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.05,
    });
  }
}

function createCircle(index) {
  var x0 = pp_h.screen.x + pp_h.w * (0.5 + 0.3 * (0.5 - Math.random()));
  var y0 = pp_h.screen.y + pp_h.h * (0.5 + 0.3 * (0.5 - Math.random()));
  var r = pp_h.w * 0.75;
  var a = Math.random() * 2 * Math.PI;

  var dx = pp_h.drag.dx;
  var dy = pp_h.drag.dy;
  var max = 20;
  if (dx > max) dx = max;
  if (dy > max) dy = max;
  if (dx < -max) dx = -max;
  if (dy < -max) dy = -max;

  // console.log( dx )

  var e1 = gsap.parseEase("power1.in");
  var e2 = gsap.parseEase("power1.out");
  var ee = e1;
  if (Math.random() > 0.5) {
    e1 = e2;
    e2 = ee;
  }

  var col = pp_h.col[Math.floor(Math.random() * pp_h.col.length)];
  // console.log( col )
  var c = {
    active: false,
    color: col,
    live: 0,
    dur: 0.6 + 1.4 * Math.random(),
    posStart: {
      x: x0,
      y: y0,
    },
    e1: e1,
    e2: e2,
    force: {
      x0: -dx * 0.5,
      y0: -dy * 0.5,
      x: 0,
      y: 0,
    },
    posEnd: {
      x: x0 + r * Math.cos(a),
      y: y0 + r * Math.sin(a),
    },
    s0: (13 + 13 * Math.random()) * ad_s,
    pos: {
      x: 0,
      y: 0,
    },
    s: 0,
    tl: null,
    index: index,
  };

  gsap.to(c, c.dur * 0.2, {
    s: c.s0,
    ease: Power2.easeOut,
    onComplete: function () {
      gsap.to(c, c.dur * 0.8, {
        s: 0,
        ease: Power1.easeIn,
      });
    },
  });

  c.tl = gsap.to(c, c.dur, {
    live: 1,
    ease: Linear.easeNone,
    onStart: function () {
      //Power1.easeOut
      c.active = true;
    },
    onComplete: function () {
      c.active = false;
      if (!pp_h.adEnd) createCircle(index);
    },
  });

  pp_h.circles.list[index] = c;
}

function calc(d, index, mode) {
  d.force.x += d.force.x0;
  d.force.y += d.force.y0;
  d.force.x0 *= 0.98;
  d.force.y0 *= 0.98;

  // console.log( d.force.x)

  if (mode == 0) {
    var val = d.live;
    var v1 = d.e1(val);
    var v2 = d.e2(val);
    d.pos.x = d.posStart.x + (d.posEnd.x - d.posStart.x) * v1;
    d.pos.y = d.posStart.y + (d.posEnd.y - d.posStart.y) * v2;
  } else {
  }
}

function draw(d, index, mode) {
  var x = d.pos.x + d.force.x;
  var y = d.pos.y + d.force.y;

  pp_h.ctx.fillStyle = d.color;

  // pp_h.ctx.beginPath();
  // pp_h.ctx.arc(x, y, d.s, 0, 2 * Math.PI);
  // pp_h.ctx.fill();

  pp_h.ctx.beginPath();
  pp_h.ctx.rect(x, y, d.s, d.s);
  pp_h.ctx.fill();

  // console.log("draw", d.force.x)
}

function loop() {
  if (pp_h.loopActive) requestAnimFrame(loop);

  var y = getTranslateY(pp.wrapper) + getTranslateY(pp.cartCont);
  var dy = y - pp_h.dy;
  pp_h.dy += dy / 8;

  gsap.set(pp.cta_cont, {
    y: pp_h.dy,
  });
}

function getTranslateY(el) {
  var style = _window.getComputedStyle(el);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  return matrix.m42;
}

function prepBox() {
  var w = pp_h.box.w;
  var h = pp_h.box.h;
  var v_amm = Math.round(6 + 6 * Math.random());
  var h_left = h;
  var h_sum = 0;

  CustomEase.create(
    "nEase",
    "M0,0,C0.242,0,0.241,-0.68,0.358,-0.652,0.786,-0.548,0.94,0.891,1,1"
  );
  pp_h.nEase = gsap.parseEase("nEase");
  CustomEase.create(
    "nEase2",
    "M0,0,C0.128,0.572,0.311,1.416,0.566,1.49,0.726,1.536,0.786,1,1,1"
  );
  pp_h.nEase2 = gsap.parseEase("nEase2");

  CustomEase.create(
    "pEase",
    "M0,0,C0.322,0,0.359,0.377,0.488,0.704,0.554,0.871,0.648,1.129,0.77,1.144,0.854,1.154,0.886,1,1,1"
  );
  pp_h.pEase = gsap.parseEase("pEase");

  CustomEase.create(
    "pEase2",
    "M0,0 C0.24,0 0.331,0.03 0.418,0.154 0.568,0.368 0.607,0.901 0.778,1.01 0.888,1.08 0.94,1 1,1 "
  );
  pp_h.pEase2 = gsap.parseEase("pEase2");

  CustomEase.create(
    "custom",
    "M0,0,C0.247,0,0.378,0.174,0.548,0.388,0.742,0.633,0.758,1,1,1"
  );

  // console.log( w );

  var count = 0;

  for (var i = 0; i < v_amm; i++) {
    var h_cur = (h_left / (v_amm - i)) * (0.5 + 1 * Math.random());
    if (i == v_amm - 1) h_cur = h - h_sum;
    h_left += -h_cur;

    var h_amm = Math.round(4 + 4 * Math.random());
    var w_left = w;
    var w_sum = 0;
    for (var j = 0; j < h_amm; j++) {
      var w_cur = (w_left / (h_amm - j)) * (0.5 + 1 * Math.random());
      if (j == h_amm - 1) w_cur = w - w_sum;
      w_left += -w_cur;
      // console.log(w_cur);
      createBox({
        count: count,
        i: i,
        j: j,
        w: w_cur,
        h: h_cur,
        x: w_sum,
        y: h_sum,
      });
      w_sum += w_cur;
      count++;
    }
    // console.log(w_sum);

    h_sum += h_cur;
  }
  // console.log( h_sum )
}

function createBox(d) {
  // console.log( d );

  // console.log( pp_h.screen.x )

  // var dx = - pp_h.screen.w * Math.random();
  // var dy = - pp_h.screen.h * Math.random();
  var dx = -d.x + pp_h.w * 0.4;
  var dy = pp_h.h * 0.4 - d.y; // pp_h.screen.h*0.05//
  // console.log( dx, dy )
  var rot = 10 * (0.5 - Math.random());

  var box = {
    x: d.x,
    y: d.y,
    dx: dx,
    dy: dy,
    w: d.w,
    h: d.h,
    life: 0,
    active: false,
    tl: null,
    s: 0,
    r: rot,
    // dx: dx,
    // dy: dy,
    img_id: pp_h.box.cur,
    img_changed: false,
  };

  var dur = 0.3 + 0.7 * Math.random();
  dur = 0.7 * (0.8 + 0.2 * Math.random());

  var ease = "back.in";
  // var dur = 0.5;
  // var delay = 0.2 * Math.random();
  // console.log( d.w, d.h )
  var x = d.x + d.w / 2;
  var y = d.y + d.h / 2;
  var dist = Math.sqrt(
    Math.pow(x - pp_h.w / 2, 2) + Math.pow(y - pp_h.h / 2, 2)
  );
  // console.log( pp_h.w*0.4 )
  var delay = dist / pp_h.w;

  // console.log(  );

  pp_h.points.push({
    x: x,
    y: y,
  });

  box.tl = gsap.to(box, dur, {
    delay: delay,
    life: 1,
    ease: "none",
    onStart: function () {
      box.active = true;
    },
    onUpdate: function (ev) {
      var val = this.targets()[0].life;
      // var v1 = Back.easeOut( 1 - val )
      // var v1 = Back.easeOut( 1 - val )
      // var v1 = pp_h.pEase( 1 - val )
      var v1 = pp_h.nEase(1 - val);
      var v1b = pp_h.nEase2(1 - val);
      // var v1 = Back.easeIn( 1 - val );
      var v2 = Back.easeIn(1 - val);

      box.s = Power0.easeNone(val * 1);
      if (box.s > 1) box.s = 1;

      box.r = rot * Power1.easeOut(1 - val);

      // console.log( val )
      box.dx = dx * v1;
      box.dy = dy * v1;
    },
  });

  pp_h.box.list.push(box);
}

function drawPoints() {
  for (var i = 0; i < pp_h.points.length; i++) {
    var p = pp_h.points[i];
    pp_h.ctx.beginPath();
    pp_h.ctx.rect(p.x, p.y, 10, 10);
    pp_h.ctx.stroke();
  }
}

function explodeAd(mode) {
  for (var i = 0; i < pp_h.box.list.length; i++) {
    explodeBox(i, mode);
  }
}

function explodeBox(i, mode) {
  var dx =
    -1 * pp_h.screen.w * Math.random() +
    (1 - pp_h.screen.x / pp_h.screen.w) * pp_h.screen.w * ad_s;
  var dy =
    -1 * pp_h.screen.h * Math.random() +
    (1 - pp_h.screen.y / pp_h.screen.h) * pp_h.screen.h * ad_s;
  var r = 5 * (0.5 - Math.random());

  // pp_h.box.list.dx = dx;
  // pp_h.box.list.dy = dy;

  var dur = 0.3 + 0.3 * Math.random();

  if (mode != "close") {
    // gsap.to(pp_h.box.list[i], dur, { dx: dx, dy: dy, r: r, ease: Elastic.easeOut, onComplete: function(){
    // 	pp_h.box.list[i].counter = 0;
    // 	gsap.to(pp_h.box.list[i], dur, {counter: 1, dx: 0, dy: 0, r: 0, ease: "pEase2", onUpdate: function(){
    // 		if( !pp_h.box.list[i].img_changed && pp_h.box.list[i].counter > 0.4 ){
    // 			pp_h.box.list[i].img_id++;
    // 			pp_h.box.list[i].img_changed = true;
    // 		}
    // 	}, onComplete: function(){
    // 		pp_h.box.list[i].img_changed = false;
    // 	}})
    // } })

    var item = pp_h.box.list[i];
    // explodeAnim( item );
  } else {
    clearInterval(pp_h.animInt);
    var dur = 0.5 + 0.5 * Math.random();
    gsap.to(pp_h.box.list[i], dur, {
      dx: dx,
      dy: dy,
      r: r,
      s: 0,
      ease: Power3.easeOut,
      onComplete: function () {
        pp_h.box.list[i].active = false;
      },
    });
  }
}

function explodeAnim(item) {
  var dur = 0.35 + 0.1 * Math.random();
  var counter = {
    val: 0,
  };

  // var radL = 150;
  // var rx = pp_h.screen.x - radL;
  // var ry = pp_h.screen.y - radL;

  var cx = pp_h.screen.x + pp_h.w / 2;
  var cy = pp_h.screen.y + pp_h.h / 2;

  var x = pp_h.screen.x + item.x + item.w / 2;
  var y = pp_h.screen.y + item.y + item.h / 2;

  var dx = x - cx;
  var dy = y - cy;

  var xSign = Math.sign(dx);
  var ySign = Math.sign(dy);
  var dist = Math.sqrt(dx * dx + dy * dy);
  var pwr = 900 / dist;
  if (pwr > 30) pwr = 30;

  var delay = 1 / pwr;

  var rx = ad_s * 100 * (0.5 - Math.random());
  var ry = ad_s * 100 * (0.5 - Math.random());

  var nx = xSign * (pwr + 100) * ((1 + ad_s) / 2) + rx;
  var ny = ySign * (pwr + 100) * ((1 + ad_s) / 2) + ry;

  var r = 10 * (0.5 - Math.random());

  gsap.to(counter, dur, {
    delay: delay,
    val: 1,
    ease: "power1.out",
    onUpdate: function () {
      var val = counter.val;

      item.dx = nx * val;
      item.dy = ny * val;

      item.r = r * val;
    },
    onComplete: function () {
      var sign = Math.sign(r);
      var nr = r + sign * 10 * (0.5 + 0.5 * Math.random());
      var deg = (nr * 180) / Math.PI;
      var dal = deg % 360;
      var ndeg = deg - dal;
      var nrad = (ndeg * Math.PI) / 180;
      // console.log( nrad )
      gsap.to(item, dur * 0.8, {
        dx: 0,
        dy: 0,
        r: nrad,
        ease: "custom",
        onUpdate: function () {
          if (!item.img_changed && this.ratio > 0.5) {
            item.img_id++;
            if (item.img_id >= bgs.length) item.img_id = 0;
            item.img_changed = true;
          }
        },
        onComplete: function () {
          item.img_changed = false;
        },
      });
    },
  });
}

function boxLoop() {
  // console.log( bgs[0] )
  // pp_h.ctx.drawImage(pp_h.box.imgs[0], 0, 0)

  for (var i = 0; i < pp_h.box.list.length; i++) {
    if (pp_h.box.list[i].active) {
      var d = pp_h.box.list[i];

      var cx = (d.w / 2) * (1 - d.s);
      var cy = (d.h / 2) * (1 - d.s);

      // cx = 0;
      // cy = 0;

      var w = d.w * ad_s;
      var h = d.h * ad_s;

      var x = ad_s * d.x + pp_h.screen.x + pp_h.w * (1 - ad_s) + cx + d.dx;
      var y = ad_s * d.y + pp_h.screen.y + pp_h.h * (1 - ad_s) + cy + d.dy;

      var xs = d.x * ad_s;
      var ys = d.y * ad_s;

      var s = 1;

      // pp_h.ctx.globalAlpha = 0.4;

      pp_h.ctx.setTransform(d.s, 0, 0, d.s, x + d.w / 2, y + d.h / 2); // sets scale and origin
      pp_h.ctx.rotate(d.r);

      pp_h.ctx.drawImage(
        pp_h.box.imgs[d.img_id],
        (xs * s) / ad_s,
        (ys * s) / ad_s,
        (w * s) / ad_s,
        (h * s) / ad_s,
        -d.w / 2,
        -d.h / 2,
        w,
        h
      );
    }
  }
  pp_h.ctx.setTransform(1, 0, 0, 1, 0, 0);

  // console.log( pp_h.screen.x)
  // console.log( pp_h.screen.y)
}

function dragLoop() {
  pp_h.drag.dx = pp_h.drag.lx - pp_h.drag.x;
  pp_h.drag.dy = pp_h.drag.ly - pp_h.drag.y;
  pp_h.drag.lx = pp_h.drag.x;
  pp_h.drag.ly = pp_h.drag.y;

  var maxRot = 30;
  pp_h.can.rot = pp_h.drag.dx;
  var dr = pp_h.can.rot - pp_h.can.drot;
  pp_h.can.drot += dr / 2;
  var rot = pp_h.can.drot;

  if (rot > maxRot) rot = maxRot;
  if (rot < -maxRot) rot = -maxRot;

  var val = rot / maxRot;
  var sign = Math.sign(val);
  var ease = Power1.easeIn(Math.abs(val));
  var res = maxRot * ease * sign;
  //
  gsap.set(pp.wrapper, {
    rotation: res,
  });

  // get x y of can
  // var style = getComputedStyle( pp.container );
  // var l = parseFloat( style.getPropertyValue("left") );
  // var t = parseFloat( style.getPropertyValue("top") );
  // pp_h.screen.x = l;
  // pp_h.screen.y = t;
}

function particleLoop() {
  // calc and draw circles
  for (var i = 0; i < pp_h.circles.list.length; i++) {
    if (pp_h.circles.list[i].active) {
      var d = pp_h.circles.list[i];
      calc(d, i, 0);
      draw(d, i, 0);
    }
  }

  // calc and draw circles #2
  for (var i = 0; i < pp_h.circles2.list.length; i++) {
    if (pp_h.circles2.list[i].active) {
      var d = pp_h.circles2.list[i];
      calc(d, i, 1);
      draw(d, i, 1);
    }
  }
}

/////////////////////// D R A G /////////////////////////////

/// DRAG ///

function initDrag() {
  var dragAmm = 0;
  var dex = 0;
  var dey = 0;
  var cx = 0;
  var cy = 0;
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  // dragElement( pp.container );
  dragElement(pp.dragEl);

  function dragElement(elmnt) {
    elmnt.onmousedown = dMouseDown;
    // var el = pp.container;
    var el = elmnt;
    el.ontouchstart = dTouchDown;

    function dMouseDown(e) {
      e = e || _window.event;
      e.preventDefault();
      gsap.to(pp.sc_wrapper, 0.2, {
        scale: 1.1,
        ease: Power1.easeOut,
      });

      pos3 = e.clientX;
      pos4 = e.clientY;

      dragMouseDown(e);
    }

    function dTouchDown(e) {
      e = e || _window.event;
      e.preventDefault();

      gsap.to(pp.sc_wrapper, 0.2, {
        scale: 1.1,
        ease: Power1.easeOut,
      });

      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;

      dragMouseDown(e);
    }

    function dragMouseDown(e) {
      dragAmm = 0;
      _document.onmouseup = closeDragElement;
      _document.ontouchend = closeDragElement;
      _document.onmousemove = mouseDrag;
      _document.ontouchmove = touchDrag;
    }

    function mouseDrag(e) {
      e = e || _window.event;
      // e.preventDefault();
      elementDrag(e, true);
    }

    function touchDrag(e) {
      e.stopImmediatePropagation();

      elementDrag(e, false);
    }

    var sPos = {
      x: 0,
      y: 0,
    };
    var cPos = {
      x: 0,
      y: 0,
    };

    function elementDrag(e, isMouse) {
      dragAmm++;
      var clientX = isMouse ? e.clientX : e.touches[0].clientX;
      var clientY = isMouse ? e.clientY : e.touches[0].clientY;

      pos1 = pos3 - clientX;
      pos2 = pos4 - clientY;
      pos3 = clientX;
      pos4 = clientY;

      cPos.x += sPos.x - pos1;
      cPos.y += sPos.y - pos2;

      var x = cPos.x;
      var y = cPos.y;

      pp_h.drag.x = x;
      pp_h.drag.y = y;

      // pp.container.style.marginRight = -x + "px";
      // pp.container.style.marginBottom = -y + "px";
      pp.container.style.right = 14 - x + "px";
      pp.container.style.bottom = 100 - y + "px";
    }

    function closeDragElement(e) {
      if (dragAmm <= 2 && click == 0) {
        // console.log("CTA")

        pp_h.box.cur++;

        // if(pp_h.box.cur == 1){
        // 	// hideBTN();
        // 	// showNEXT( true );
        // } if(pp_h.box.cur == bgs.length-1){
        // 	// showNEXT( false );
        // 	// showCTA();
        // } else if (pp_h.box.cur < bgs.length-1){
        // 	gsap.to(pp.next, 0.05, {delay: 0.0, opacity: 0, onComplete: function(){
        // 		gsap.to(pp.next, 0.15, {delay: 0.85, opacity: 1});
        // 	}})
        // }

        // if(pp_h.box.cur >=  bgs.length) {
        ctaFunction();
        // } else {
        // gsap.to(pp.cursor, 0.05, {opacity: 0});
        // gsap.to(pp.cursor, 0.5, {delay: 1, opacity: 1});
        // explodeAd();
        // startEvent("click");
        // }

        click = 1;
        setTimeout(function () {
          click = 0;
        }, 1000);
      } else {
        if (click == 0) {
          startEvent("drag");
          startedFunction();
        }
      }

      gsap.to(pp.sc_wrapper, 0.25, {
        scale: 1,
        ease: Power1.easeOut,
      });
      _document.onmouseup = null;
      _document.onmousemove = null;
      _document.ontouchend = null;
      _document.ontouchmove = null;
    }

    var click = 0;
  }
}
