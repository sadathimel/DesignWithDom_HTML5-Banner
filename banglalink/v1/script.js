let currentCounter = 0;
let increment = 3493456;

let targetValue = 40000000;

updateCounter();

function updateCounter() {
  if (currentCounter < targetValue) {
    currentCounter += increment;
    if (currentCounter > targetValue) {
      currentCounter = targetValue;
    }
    document.querySelector(".ppm_numberCounter").innerHTML =
      translateNumToBangla(currentCounter);
    setTimeout(() => {
      updateCounter();
    }, 60);
  }
}

function translateNumToBangla(num) {
  banglaNum = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  banglaNumText = "";
  numText = num.toString();
  for (let c of numText) {
    banglaNumText += banglaNum[parseInt(c)];
  }
  return banglaNumText;
}

gsap
  .timeline()
  .to(".ppm_orangeOverlay", { opacity: 0, duration: 4 })
  .to(
    [".ppm_blankText", ".ppm_numberCounter"],
    { opacity: 0, display: "none" },
    ">.5"
  )
  .to(".ppm_fullText", { opacity: 1, display: "block" }, "<")
  .to(
    ".ppm_fullText",
    {
      scaleX: 1.15,
      scaleY: 1.15,
      duration: 0.4,
      repeat: 1,
      yoyo: true,
      ease: "none",
    },
    ">.7"
  )
  .to(
    ".ppm_fullText",
    {
      scaleX: 1,
      scaleY: 1,
      duration: 0.4,
    },
    "<"
  )
  .from(
    ".ppm_fullText1",
    { x: 150, ease: "bounce.out", display: "none", opacity: 1, duration: 0.8 },
    "<"
  )
  .from(
    ".ppm_fullText2",
    {
      x: 150,
      ease: "bounce.out",
      display: "none",
      opacity: 1,
      duration: 0.8,
      onComplete: repeatAnimation,
    },
    "<.5"
  );

function repeatAnimation() {
  setTimeout(() => {
    currentCounter = 0;
    document.querySelector(".ppm_numberCounter").innerHTML = "০০০০০";
    gsap.to(".ppm_fullText", { opacity: 0, display: "none", delay: 0.1 });
    gsap.from(".ppm_blankText1", { opacity: 0, display: "none", delay: 0.1 });
    gsap.from(".ppm_blankText2", { opacity: 0, display: "none", delay: 0.1 });
    gsap.to([".ppm_blankText", ".ppm_numberCounter", ".ppm_orangeOverlay"], {
      opacity: 1,
      display: "block",
      onComplete: secondStep,
    });
  }, 1000);
}

function secondStep() {
  updateCounter();
  gsap
    .timeline()
    .to(".ppm_orangeOverlay", { opacity: 0, display: "none", duration: 4 })
    .to(
      [".ppm_blankText", ".ppm_numberCounter"],
      { opacity: 0, display: "none" },
      ">.5"
    )
    .to(".ppm_fullText", { opacity: 1, display: "block" }, "<")
    .to(
      ".ppm_fullText",
      {
        scaleX: 1.15,
        scaleY: 1.15,
        duration: 0.4,
        repeat: 1,
        yoyo: true,
        ease: "none",
      },
      ">.7"
    )
    .to(
      ".ppm_fullText",
      {
        scaleX: 1,
        scaleY: 1,
        duration: 0.4,
      },
      "<.5"
    )
    .from(
      ".ppm_fullText1",
      {
        x: 150,
        ease: "bounce.out",
        display: "none",
        opacity: 1,
        duration: 0.8,
      },
      "<"
    )
    .from(
      ".ppm_fullText2",
      {
        x: 150,
        ease: "bounce.out",
        display: "none",
        opacity: 1,
        duration: 0.8,
        onComplete: repeatAnimation,
      },
      "<.5"
    );
}
