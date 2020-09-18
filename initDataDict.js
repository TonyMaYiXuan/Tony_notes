if (typeof window.top.dataDict == 'undefined') {
    window.top.dataDict = {
        dayNight: 1,
        userAgent: navigator.userAgent || navigator.vendor || window.opera,
        //isIOS: /iPad|iPhone|iPod/.test(this.userAgent) && !window.MSStream,
    };
    window.top.dataDict.isAndroid = /android/i.test(window.top.dataDict.userAgent)
}
