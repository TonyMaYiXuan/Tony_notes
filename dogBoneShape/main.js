if (typeof dataDict == "undefined") { // dogBoneShape opened as website on its own
    var externalJS = ['../initDataDict.js'];
    dataDict.externalJS.forEach(item => {
        var js = document.createElement('script');
        document.body.appendChild(js);
        js.src='item';
    });
}
