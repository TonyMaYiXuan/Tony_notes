if (typeof window.top.dataDict == 'undefined') {
    window.top.dataDict = {
        bodyPadding: 20,
        dayNight: 1,
        userAgent: navigator.userAgent || navigator.vendor || window.opera,
        isIOS: /iPad|iPhone|iPod/.test(this.userAgent) && !window.MSStream,
        isAndroid: /android/i.test(this.userAgent)
    };
    alert('alive in initDataDict.js; window.top.dataDict.isAndroid' + window.top.dataDict.isAndroid + this.dataDict.isAndroid);
}
