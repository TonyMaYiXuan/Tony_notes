if (typeof window.top.dataDict == 'undefined') {
    window.top.dataDict = {
        bodyPadding: 20,
        dayNight: 1,
        userAgent: navigator.userAgent || navigator.vendor || window.opera
    };
    window.top.dataDict.isIOS = /iPad|iPhone|iPod/i.test(window.top.dataDict.userAgent) && !window.MSStream;
    window.top.dataDict.isAndroid = /Android/.test(window.top.dataDict.userAgent);
}
