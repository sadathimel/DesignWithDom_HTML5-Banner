let innityApps3dPostPlus = null;
let innityAppsIsRotation = true;
let innityAppsRotationDeg = 15;

function innityAppsBannerLoaded() {
  innityApps3dPostPlus = new InnityApps3dPostPlus('innity-apps-rotation-layer', {
//    autoSwipeInterval: 2000,
    onLandToSlide: slideLandOn
  });
  innityApps3dPostPlus.autoSwipe();
}

function slideLandOn(elementID) {}

function innityAppsAdAt(offsetTopPercent) {
  updateRotation(offsetTopPercent);
}

function updateRotation(topPercent) {
  if (innityAppsIsRotation === false) {
    return;
  }

  let rotationXDeg = -innityAppsRotationDeg;
  let rotationYDeg = -innityAppsRotationDeg;

  if (topPercent <= 100 && topPercent > 90) {
    rotationXDeg = -innityAppsRotationDeg;
    rotationYDeg = -innityAppsRotationDeg;
  } else if (topPercent <= 90 && topPercent > 70) {
    rotationXDeg = -innityAppsRotationDeg;
    rotationYDeg = innityAppsRotationDeg;
  } else if (topPercent <= 70 && topPercent > 30) {
    rotationXDeg = 0;
    rotationYDeg = 0;
  } else if (topPercent <= 30 && topPercent > 20) {
    rotationXDeg = innityAppsRotationDeg;
    rotationYDeg = -innityAppsRotationDeg;
  } else if (topPercent <= 20 && topPercent > 0) {
    rotationXDeg = innityAppsRotationDeg;
    rotationYDeg = innityAppsRotationDeg;
  }

  document.getElementById('innity-apps-rotation-layer').style.transform = `rotateX(${rotationXDeg}deg) rotateY(${rotationYDeg}deg)`;
}
