const browsers = {};
browsers.isOpera = (!!window.opr && !!opr.addons) ||
  !!window.opera ||
  navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
browsers.isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+= "[object HTMLElementConstructor]"
browsers.isSafari =/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// Internet Explorer 6-11
browsers.isIE /* @cc_on!@*/ = false || !!document.documentMode;
// Edge 20+
browsers.isEdge = !browsers.isIE && !!window.StyleMedia;
// Chrome 1+
browsers.isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
browsers.isBlink = (browsers.isChrome || browsers.isOpera) && !!window.CSS;

const mobile = {};

// Android
mobile.isAndroid = navigator.userAgent.match(/Android/i);
// Iphone
mobile.isIphone = navigator.userAgent.match(/iPhone/i);
// Ipod
mobile.isIpod = navigator.userAgent.match(/iPod/i);
// Ipad
mobile.isIpad = navigator.userAgent.match(/iPad/i);
// BlackBerry
mobile.isBlackberry = navigator.userAgent.match(/RIM/i) || navigator.userAgent.match(/BB/i);
// Webos
mobile.isWebos = navigator.userAgent.match(/webOS/i);
// Windows Phone
mobile.isWindowsphone = navigator.userAgent.match(/Windows Phone/i);
// SymbianOS
mobile.isSymbian = navigator.userAgent.match(/SymbianOS/i);

const detector = {
  mobile,
  browsers,
};

if (typeof module === 'object') {
  module.exports = detector;
}
