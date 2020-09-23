if (typeof window.top.dataDict == 'undefined') {
    window.top.dataDict = {
        bodyPadding: 20,
        dayNight: 1,
        userAgent: navigator.userAgent || navigator.vendor || window.opera,
        isIOS: /iPad|iPhone|iPod/i.test(this.userAgent) && !window.MSStream,
        isAndroid: /Android/i.test(this.userAgent)
    };
    alert('alive in initDataDict.js; userAgent: ' + window.top.dataDict.userAgent + '; /android/i.test(this.userAgent): ' + /Android/i.test(window.top.dataDict.userAgent));
}
