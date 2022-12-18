function InnityAppsMobilePlatform() {
  this.debug = debug;
  this.getBrowserName = getBrowserName;
  this.getBrowserVersion = getBrowserVersion;
  this.getOS = getOS;
  this.getOSVersion = getOSVersion;
  this.getVersion = getVersion;
  this.isIosSkype = isIosSkype;
  this.isIosWeChat = isIosWeChat;
  this.isSamsungBrowser = isSamsungBrowser;

  /**
   * Consist of <b>chrome</b>, <b>safari</b>, <b>samsungbrowser</b>,
   * <b>facebook</b>, <b>wechat</b>, <b>crios</b>, <b>line</b>,
   * <b>other</b>
   * @type String
   */
  var browserName_ = 'other';
  var browsersVersion_ = {
    'chrome': '0',
    'samsungbrowser': '0',
    'safari': '0',
    'crios': '0' // ios Chrome
  };
  /**
   * Consist of <b>ios</b>, <b>android</b> & <b>other</b>
   * @type String
   */
  var os_ = 'other';
  var osVersion_ = '0';
  var ua_ = null;
  /**
   * A checking to determine is the library latest.
   * @type String
   */
  var version_ = '5.0.0';

  initClass();

  // Public Function Section =================================================

  /**
   * For debug purpose.
   * @returns {String}
   */
  function debug() {
    var stringValue = '';
    if (os_ === 'ios') {
      stringValue = os_ + ' Version ' + osVersion_.join('.') + ' with ' + browserName_;
    } else {
      stringValue = os_ + ' Version ' + osVersion_ + ' with ' + browserName_;
    }
    return stringValue;
  }

  function getBrowserName() {
    return browserName_;
  }

  function getBrowserVersion() {
    return browsersVersion_;
  }

  function getOS() {
    return os_;
  }

  function getOSVersion() {
    return osVersion_;
  }

  function getVersion() {
    return version_;
  }

  /**
   * Detect iOS Skype in app browser.
   * @returns {Boolean} TRUE if is iOS Skype in app browser, else FALSE.
   */
  function isIosSkype() {
    return os_ === 'ios' && browserName_ === 'other';
  }

  /**
   * Detect iOS WeChat in app browser.
   * @returns {Boolean} TRUE if is iOS WeChat in app browser, else FALSE.
   */
  function isIosWeChat() {
    return os_ === 'ios' && browserName_ === 'wechat';
  }

  function isSamsungBrowser() {
    return browsersVersion_.samsungbrowser > 0;
  }

  // Proctected Function Section =============================================

  // Private Function Section ================================================

  function androidBrowserDetection_() {
    if (!!window.chrome && ua_.toLowerCase().indexOf('chrome') > -1) {
      browserName_ = 'chrome';
      androidChromeVersionDetection_();
    }

    if (ua_.toLowerCase().indexOf('samsungbrowser') > -1) {
      browserName_ = 'samsung';
      samsungBrowserVersionDetection_();
    }

    if (ua_.toLowerCase().indexOf('firefox') > -1) {
      browserName_ = 'firefox';
    }
  }

  function androidChromeVersionDetection_() {
    var analysis = ua_.match(/(chrome(?=\/))\/?\s*(\d+)/i) || [];
    if (analysis[1].toLowerCase() === 'chrome') {
      browsersVersion_['chrome'] = analysis[2];
    }
  }

  function browserDetection_() {
    if (os_ === 'ios') {
      iosBrowserDetection_();
    } else if (os_ === 'android') {
      androidBrowserDetection_();
    }
  }

  function iosBrowserDetection_() {
    var standalone = window.navigator.standalone;
    var isSafariKeyExist = /safari/i.test(ua_);
    var isChrome = /CriOS/i.test(ua_);

    if (!standalone && isSafariKeyExist === true) {
      if (isChrome === true) {
        browserName_ = 'chrome';
        iosChromeVersionDetection_();
        return;
      }

      var isLine = /Line/i.test(ua_);
      if (isLine === true) {
        browserName_ = 'line';
        return;
      }

      browserName_ = 'safari';
      browsersVersion_['safari'] = osVersion_.join('.');
    } else if (standalone && isSafariKeyExist === false) {
      // Standalone, homepage icon page
    } else {
      // In app browser
      if (/\bFB[\w_]+\//i.test(ua_) === true) {
        browserName_ = 'facebook';
      } else if (/\bMicroMessenger\//i.test(ua_) === true) {
        browserName_ = 'wechat';
      } else if (/\bInstagram\b/i.test(ua_) === true) {
        browserName_ = 'instagram';
      } else {
        // So far Skype don't have any key to detect.
        browserName_ = 'other';
      }
    }
  }

  function iosChromeVersionDetection_() {
    var analysis = ua_.match(/(crios(?=\/))\/?\s*(\d+)/i) || [];
    if (analysis[1].toLowerCase() === 'crios') {
      browsersVersion_['crios'] = analysis[2];
    }
  }

  function initClass() {
    ua_ = window.navigator.userAgent;

    osDetection_();
    browserDetection_();
  }

  function osDetection_() {
    if (/(iPhone|iPod|iPad)/i.test(ua_)) {
      os_ = 'ios';
      var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
      osVersion_ = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    } else if (ua_.toLowerCase().indexOf('android') > -1) {
      os_ = 'android';
      var v = ua_.match(/Android (\d+(?:\.\d+){0,2})/i);
      if (v !== null) {
        osVersion_ = v[v.length - 1];
      }
    }
  }

  function samsungBrowserVersionDetection_() {
    var analysis = ua_.match(/(samsungbrowser(?=\/))\/?\s*(\d+)/i) || [];
    if (analysis[1].toLowerCase() === 'samsungbrowser') {
      browsersVersion_['samsungbrowser'] = analysis[2];
    }
  }

}

let innityAppsMaterialGeneratorVersion = '6.0.0';
let innityAppsTotalImage = 0;

function innityAppsGenerateMainContent(container, waitForImageLoad = false) {
  for (let i = 0; i < innityAppsMaterials.length; i++) {
    innityAppsMaterialGenerator(innityAppsMaterials[i], container, waitForImageLoad);
  }

  if (waitForImageLoad === false) {
    innityAppsMaterialsLoadedCompleted();
  }
}

function innityAppsGifToMp4(elementData) {
  if (elementData.elType !== 'img') {
    return;
  }

  let imgSrc = elementData.attrs.src;
  if (elementData.attrs['data-src'] !== undefined) {
    // Some template is using data-src to load image source before user engaged.
    imgSrc = elementData.attrs['data-src'];
  }

  if (imgSrc.toLowerCase().indexOf('gif') === -1) {
    return;
  }

  elementData.elType = 'video';
  elementData.attrs.src = imgSrc.toLowerCase().replace('gif', 'mp4');
  if (elementData.attrs['data-src'] !== undefined) {
    // Some template is using data-src to load image source before user engaged.
    elementData.attrs.src = '';
    elementData.attrs['data-src'] = imgSrc.toLowerCase().replace('gif', 'mp4');
  }
  elementData.attrs.preload = 'metadata';
  elementData.attrs.autoplay = '';
  elementData.attrs.muted = '';
  elementData.attrs.loop = '';
  elementData.attrs.playsinline = '';

  if (elementData.cssClass === undefined) {
    elementData.cssClass= [];
  }
  elementData.cssClass.push('innity-apps-animated-gif-video');
}

function innityAppsImagePreviewCacheBuster(attrData, attrName) {
  let attrChildData = attrData;

  if (typeof(innityAppsIsPreview) === "undefined") {
    return attrChildData;
  }

  if (attrName === 'src' || attrName === 'data-src') {
    attrChildData += '?t=' + new Date().getTime();
  }

  return attrChildData;
}

/**
 * Generate HTML element based on elementData attribute. <br />
 * elementData.elType => type of created element <br/>
 * elementData.id => id of created element <br/>
 * elementData.cssClass => CSS classes of created element, is an array of string <br/>
 * elementData.innerHTML => direct content of created element <br/>
 * elementData.clickFunc => function called when created element is clicked, must be function name <br/>
 * elementData.clickTag => clickTag trigger by created element <br/>
 * elementData.cssStyle => inline CSS style of created element, object of cssStyleAttributeName => value <br/> eg:{'backgroundColor': 'rgba(255, 0, 148, 1)} <br/>
 * elementData.attrs => Attributes of created element, object of attributeName => value <br/> eg:{src: 'my_image.png'} <br/>
 * elementData.childs => children inside created element, array of elementData object <br/>
 * @param {object} elementData
 * @param {element} container
 * @param {boolean} waitForImageLoad Default is FALSE, set TRUE will wait for image loaded before call innityAppsBannerLoaded.
 */
function innityAppsMaterialGenerator(elementData, container, waitForImageLoad = false) {
  innityAppsGifToMp4(elementData);

  let elementType = (typeof elementData.elType === 'undefined') ? 'div' : elementData.elType;
  let materialEl = document.createElement(elementType);

  innityAppsWaitForImageHandler(waitForImageLoad, materialEl, elementType);

  if (elementType === 'svg' || elementType === 'path') {
    materialEl = document.createElementNS('http://www.w3.org/2000/svg', elementType);
  }

  if (typeof elementData.id !== 'undefined') {
    materialEl.setAttribute('id', elementData.id);
  }

  if (typeof elementData.cssClass === 'object' && typeof elementData.cssClass.length === 'number') {
    for (let i = 0; i < elementData.cssClass.length; i++) {
      materialEl.classList.add(elementData.cssClass[i]);
    }
  }

  if (typeof elementData.innerHTML !== 'undefined') {
    materialEl.innerHTML = elementData.innerHTML;
  }

  if (typeof elementData.clickFunc === 'function') {
    materialEl.addEventListener('click', function(e) {
      e.stopPropagation();
      elementData.clickFunc(materialEl);
    }, false);
  }

  if (typeof elementData.clickTag !== 'undefined') {
    materialEl.addEventListener('click', function(e) {
      e.stopPropagation();
      innityAppsTriggerClickTag(elementData.clickTag);
    }, false);
  }

  if (typeof elementData.cssStyle !== 'undefined' && typeof elementData.cssStyle === 'object') {
    for (let cssKey in elementData.cssStyle) {
      materialEl.style[cssKey] = elementData.cssStyle[cssKey];
    }
  }

  if (typeof elementData.attrs !== 'undefined' && typeof elementData.attrs === 'object') {
    for (let attrName in elementData.attrs) {
      if (elementType === 'svg' || elementType === 'path') {
        materialEl.setAttributeNS(null, attrName, elementData.attrs[attrName]);
      }
      else {
        let attrChildData = innityAppsImagePreviewCacheBuster(elementData.attrs[attrName], attrName);
        materialEl.setAttribute(attrName, attrChildData);
      }
    }
  }

  if (typeof elementData.childs !== 'undefined' && typeof elementData.childs === 'object') {
    for (let i = 0; i < elementData.childs.length; i++) {
      innityAppsMaterialGenerator(elementData.childs[i], materialEl, waitForImageLoad);
    }
  }

  container.appendChild(materialEl);
}

function innityAppsPlayGifVideo() {
  let gifVideos = document.getElementsByClassName('innity-apps-animated-gif-video');
  [...gifVideos].forEach(gifVid => {
    gifVid.muted = true;
    gifVid.play().catch((e) => {});;
  });
}

function innityAppsWaitForImageHandler(waitForImageLoad, element, elementType) {
  if (waitForImageLoad === false) {
    return;
  }

  if (elementType.toLowerCase() !== 'img') {
    return;
  }

  innityAppsTotalImage++;

  element.addEventListener('load', imageLoaded_);
  element.addEventListener('error', imageError_);

  function imageError_() {
    imageCompleted_();
  }

  function imageLoaded_() {
    imageCompleted_();
  }

  function imageCompleted_() {
    innityAppsTotalImage--;

    if (innityAppsTotalImage === 0) {
      innityAppsMaterialsLoadedCompleted();
    }
  }

}

function innityAppsMaterialsLoadedCompleted() {
  if (typeof bannerAnimationStart === 'function') {
    setTimeout(bannerAnimationStart, 100);
  }

  if (typeof innityAppsBannerLoaded === 'function') {
    setTimeout(innityAppsBannerLoaded, 100);
  }

  setInterval(innityAppsPlayGifVideo, 1000);
}

let innityAppsTimerTrackingID = null;
/**
 * For reference purpose only.
 * @type String
 */
let innityAppsTrackerVersion = '5.0.0';

function innityAppsTrackerReset() {
  innityAppsTriggerTimerStop();
  innityAppsTrackerPauseVideo();
}

function innityAppsTriggerClickTag(clickTag) {
  innityAppsTrackerPauseVideo();
  InnityHTMLAd.click({clickTAG: clickTag});
}

function innityAppsTriggerUrl(urlToLand) {
  innityAppsTrackerPauseVideo();
  InnityHTMLAd.click({url: urlToLand});
}

function innityAppsTriggerTimerStart(id) {
  if (innityAppsTimerTrackingID === id) {
    return;
  }

  innityAppsTriggerTimerStop();
  InnityHTMLAd.startTimer(id);
  innityAppsTimerTrackingID = id;
}

function innityAppsTriggerTimerStop() {
  if (innityAppsTimerTrackingID !== null) {
    InnityHTMLAd.stopTimer(innityAppsTimerTrackingID);
    innityAppsTimerTrackingID = null;
  }
}

function innityAppsTriggerTrack(track) {
  InnityHTMLAd.track(track);
}

function innityAppsTrackerPauseVideo() {
  if (typeof innityAppsPauseAllVideo === 'function') {
    // Helper function to pause all video.
    innityAppsPauseAllVideo();
  }
}

function innityAppsResponsiveTriggerTimerStart(id) {
  innityAppsTriggerTimerStart(innityAppsGetResponsiveID(id));
}

function innityAppsResponsiveTriggerTrack(track) {
  innityAppsTriggerTrack(innityAppsGetResponsiveID(track));
}

function innityAppsGetResponsiveID(id) {
  if (innityAppsPlatform === undefined || innityAppsPlatform === null) {
    console.error('Missing innityAppsPlatform library! Please include InnityAppsMobilePlatform class');
    return;
  }

  let responsiveID = '';
  switch (innityAppsPlatform.getOS()) {
    case 'android':
    case 'ios':
      responsiveID = 'mobile_' + id;
      break;
    default:
      responsiveID = 'nonmobile_' + id;
      break;
  }

  return responsiveID;
}

let innityAppsIsBannerLoad = false;
let innityAppsPlatform = null;
let innityAppsVersion = '6.0.0';
let innityAppsWarningReported = false;

window.addEventListener('load', innityAppsInitCreative, false);

function innityAppsInitCreative() {
  innityAppsPlatform = new InnityAppsMobilePlatform();

  window.addEventListener('message', innityAppsMessageHandler, false);

  innityAppsSetupCreative();
  innityAppsPostReadyToProxy();
}

function innityAppsMessageHandler(event) {
  let innityAppsSupportedMsg = event.data;
  if (typeof (innityAppsSupportedMsg.owner) === 'undefined' || innityAppsSupportedMsg.owner !== 'Innity' || typeof (innityAppsSupportedMsg.adType) === 'undefined') {
    return;
  }

  if (innityAppsSupportedMsg.version != innityAppsVersion) {
    if (innityAppsWarningReported === false) {
      console.warn('Proxy and ad version is different! Proxy v' + innityAppsSupportedMsg.version + ' vs Ad v' + innityAppsVersion);
    }
    innityAppsWarningReported = true;
  }

  switch (innityAppsSupportedMsg.action) {
    case 'scroll':
      if (innityAppsSupportedMsg.data === undefined) {
        return;
      }
      innityAppsProxyScrollHandler(innityAppsSupportedMsg.data);
      break;
    case 'shown':
      // Place to receive country & salesModel data.
      break;
    default:
      break;
  }
}

function innityAppsPostReadyToProxy() {
  parent.postMessage({owner: 'Innity', adType: 'innity-apps-ad', action: 'adReady', data: {}, version: innityAppsVersion}, '*');
}

function innityAppsProxyScrollHandler(proxyData) {
  if (proxyData.topPercentage === undefined) {
    return;
  }

  innityAppsAdAt(proxyData.topPercentage);
}

function innityAppsSetupCreative() {
  if (innityAppsIsBannerLoad === true) {
    return;
  }

  
  initParseCsv(oncompleteParse);
  function oncompleteParse() {
    innityAppsGenerateMainContent(document.getElementById('innity-apps-ad'), true);
    innityAppsIsBannerLoad = true;
  }
  
}

function InnityApps3dPostPlus(elementID, opts = {}) {
  this.autoSwipe = autoSwipe;

  let animationTimeout_ = null;
  let autoSwipeInterval_ = null;
  let extraOpts_ = mergeObject_({
    autoSwipeInterval: 2000,
    onLandToSlide: null
  }, opts, 'InnityApps3dPostPlus merge options.');
  let isAutoSwipe_ = true;
  let slideDirection_ = 'left';

  initClass_();

  function initClass_() {
    new MouseHandler_();
    new TouchHandler_();
  }

  // Public function ===========================================================

  function autoSwipe() {
    swipe_();
    autoSwipeInterval_ = setInterval(swipe_, extraOpts_.autoSwipeInterval);
  }

  // Private function ==========================================================

  function mergeObject_(defaultObj, overrideObject, reference) {
    for (let attributeKey_ in overrideObject) {
      if (defaultObj.hasOwnProperty(attributeKey_)) {
        defaultObj[attributeKey_] = overrideObject[attributeKey_];
      } else {
        console.warn('Key [' + attributeKey_ + '] not found in object merging process.', reference);
      }
    }

    return defaultObj;
  }

  function onLandToSlide_(slideElementID) {
    let el = document.getElementById(slideElementID);
    if (el !== null && isAutoSwipe_ === false) {
      innityAppsTriggerTimerStart(el.getAttribute('data-time-track'));
    }

    if (typeof extraOpts_.onLandToSlide === 'function') {
      extraOpts_.onLandToSlide(slideElementID);
    }
  }

  function stopAutoSwipe_() {
    if (autoSwipeInterval_ === null) {
      return;
    }

    isAutoSwipe_ = false;
    clearInterval(autoSwipeInterval_);
    autoSwipeInterval_ = null;
  }

  function swipe_() {
    let rights = document.getElementsByClassName('right');
    let lefts = document.getElementsByClassName('left');
    let show = document.getElementsByClassName('show');

    if (rights.length === 0 && lefts.length === 0) {
      return;
    }

    if (slideDirection_ === 'left') {
      swipeToLeft__();
    } else if (slideDirection_ === 'right') {
      swipeToRight__();
    }

    function swipeToLeft__() {
      if (rights.length === 0) {
        slingBounce__();
        slideDirection_ = 'right';
        onLandToSlide_(show[0].id);
        return;
      }

      [...show].forEach((el) => {
        el.classList.remove('show');
        el.classList.add('left');
      });

      if (animationTimeout_ !== null) {
        return;
      }

      animationTimeout_ = setTimeout(() => {
        if (rights.length === 1) {
          slideDirection_ = 'right';
        }

        if (rights.length === 0) {
          return;
        }

        onLandToSlide_(rights[0].id);
        rights[0].classList.add('show');
        rights[0].classList.remove('right');

        animationTimeout_ = null;
      }, 300);
    }

    function swipeToRight__() {
      if (lefts.length === 0) {
        slingBounce__();
        slideDirection_ = 'left';
        onLandToSlide_(show[0].id);
        return;
      }

      [...show].forEach((el) => {
        el.classList.remove('show');
        el.classList.add('right');
      });

      if (animationTimeout_ !== null) {
        return;
      }

      animationTimeout_ = setTimeout(() => {
        if (lefts.length === 1) {
          slideDirection_ = 'left';
        }

        if (lefts.length === 0) {
          return;
        }

        onLandToSlide_(lefts[lefts.length - 1].id);
        lefts[lefts.length - 1].classList.add('show');
        lefts[lefts.length - 1].classList.remove('left');

        animationTimeout_ = null;
      }, 300);
    }

    function slingBounce__() {
      let rotationEl = document.getElementById('innity-apps-rotation-layer');
      if (rotationEl === null) {
        return;
      }

      let animationCss = 'bounce-to-right';
      if (slideDirection_ === 'left') {
        animationCss = 'bounce-to-left';
      }

      rotationEl.classList.add(animationCss);

      setTimeout(() => {
        rotationEl.classList.remove('bounce-to-right');
        rotationEl.classList.remove('bounce-to-left');
      }, 200);
    }

  }

  function trackButtonClick_(track) {
    innityAppsTriggerTrack(track);
  }

  function trackUserSwipe_() {
    innityAppsTriggerTrack('user_swipe');
  }

  function triggerClicktag_() {
    let activeEl = document.querySelector('.show');
    if (activeEl === null) {
      console.error('No clicktag attach to element attribute "data-clicktag".', activeEl);
      return;
    }

    innityAppsTriggerTimerStart(activeEl.getAttribute('data-time-track'));
    innityAppsTriggerClickTag(activeEl.getAttribute('data-clicktag'));
  }

  function MouseHandler_() {
    let btnNext__ = null;
    let btnPrev__ = null;
    let containerEl__ = null;
    let isMouseMoved__ = false;
    let rotationDegree__ = innityAppsRotationDeg;
    let rotationEl__ = null;

    initClass__();

    function initClass__() {
      containerEl__ = document.getElementById(elementID);
      if (containerEl__ === null) {
        console.error(`Cannot find ${elementID}`);
        return;
      }

      rotationEl__ = document.getElementById('innity-apps-rotation-layer');
      if (rotationEl__ === null) {
        console.error("Cannot find 'innity-apps-rotation-layer'");
        return;
      }

      btnNext__ = document.getElementById('innity-apps-btn-next');
      btnPrev__ = document.getElementById('innity-apps-btn-prev');

      bindEvents__();
    }

    // Public function =========================================================

    // Private function ========================================================

    function bindEvents__() {
      containerEl__.addEventListener('click', onClick__);

      btnNext__.addEventListener('click', onBtnNextClick__);
      btnPrev__.addEventListener('click', onBtnPrevClick__);

      // Only desktop have mouse move event.
      if (innityAppsPlatform.getOS() === 'other') {
        containerEl__.addEventListener('mousemove', onMouseMove__);
        btnNext__.addEventListener('mousemove', onBtnMouseMove__);
        btnPrev__.addEventListener('mousemove', onBtnMouseMove__);
      }
    }

    function onBtnMouseMove__(e) {
      e.stopPropagation();
      rotationEl__.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }

    function onBtnNextClick__(e) {
      e.stopPropagation();

      stopAutoSwipe_();
      if (document.getElementsByClassName('right').length > 0) {
        trackButtonClick_('btn_next');
      }
      slideDirection_ = 'left';
      swipe_();
    }

    function onBtnPrevClick__(e) {
      e.stopPropagation();

      stopAutoSwipe_();
      if (document.getElementsByClassName('left').length > 0) {
        trackButtonClick_('btn_prev');
      }
      slideDirection_ = 'right';
      swipe_();
    }

    function onClick__() {
      if (isMouseMoved__ === true) {
        return;
      }

      stopAutoSwipe_();
      triggerClicktag_();
    }

    function onMouseMove__(e) {
      innityAppsIsRotation = false;

      let x = (e.clientX / window.innerWidth) * 100;
      let degY = 0;
      if (x < 30) {
        degY = -rotationDegree__;
      } else if (x >= 70) {
        degY = rotationDegree__;
      }

      let y = (e.clientY / window.innerHeight) * 100;
      let degX = 0;
      if (y < 30) {
        degX = rotationDegree__;
      } else if (y >= 70) {
        degX = -rotationDegree__;
      }

      rotationEl__.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg)`;
    }

  }

  function TouchHandler_() {
    let containerEl__ = null;
    let initClientX__ = 0;

    initClass__();

    function initClass__() {
      containerEl__ = document.getElementById(elementID);
      if (containerEl__ === null) {
        console.error(`Cannot find ${elementID}`);
        return;
      }

      bindEvents__();
    }

    // Public function =========================================================

    // Private function ========================================================

    function bindEvents__() {
      containerEl__.addEventListener('touchstart', onTouchStart__);
      containerEl__.addEventListener('touchend', onTouchEnd__);
    }

    function onTouchEnd__(e) {
      stopAutoSwipe_();

      let xDiff = initClientX__ - e.changedTouches[0].clientX;
      if (xDiff > 10) {
        slideDirection_ = 'left';
        if (document.getElementsByClassName('right').length > 0) {
          trackUserSwipe_();
        }
      } else if (xDiff < -10) {
        slideDirection_ = 'right';
        if (document.getElementsByClassName('left').length > 0) {
          trackUserSwipe_();
        }
      } else {
        return;
      }

      swipe_();
    }

    function onTouchStart__(e) {
      initClientX__ = e.changedTouches[0].clientX;
    }

  }

}
