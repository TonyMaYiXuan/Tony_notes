if (typeof window.top.dataDict == 'undefined') {
    window.top.dataDict = {
        bodyPadding: 20,
        dayNight: 1,
        userAgent: navigator.userAgent || navigator.vendor || window.opera,
        isIOS: /iPad|iPhone|iPod/i.test(this.userAgent) && !window.MSStream,
        isAndroid: /android/i.test(this.userAgent)
    };
    alert('alive in initDataDict.js; userAgent: ' + this.dataDict.userAgent + '; /android/i.test(this.userAgent): ' + /android/i.test(this.userAgent));
}
