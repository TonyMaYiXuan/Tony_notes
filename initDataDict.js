var dataDict = {
        dayNight: 1,
        userAgent: navigator.userAgent || navigator.vendor || window.opera,
        isIOS: /iPad|iPhone|iPod/.test(dataDict.userAgent) && !window.MSStream,
        isAndroid: /android/i.test(this.userAgent)
    };
