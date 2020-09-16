function dayNightMode(flag) {
    var dayNight = ['day', 'night']
    document.body.style.backgroundImage = dataDict.style.dnModeAttr[dayNight[flag]].bodyBgImage;
    document.body.style.color = dataDict.style.dnModeAttr[dayNight[flag]].bodyColor;
    document.body.style.fontFamily = dataDict.style.dnModeAttr[dayNight[flag]].bodyFontFace;
    document.body.style.marginTop = dataDict.style.dnModeAttr[dayNight[flag]].topMargin.toString() + 'px';
    document.body.style.marginLeft = dataDict.style.dnModeAttr[dayNight[flag]].leftRightMargin.toString() + 'px';
    document.body.style.marginRight = dataDict.style.dnModeAttr[dayNight[flag]].leftRightMargin.toString() + 'px';
    document.getElementsByTagName('h1')[0].style.color = dataDict.style.dnModeAttr[dayNight[flag]].h1Color;
    document.getElementsByTagName('h1')[0].style.fontFamily = dataDict.style.dnModeAttr[dayNight[flag]].h1FontFace;
    document.getElementById('menuTable').style.backgroundColor = dataDict.style.dnModeAttr[dayNight[flag]].menuBgColor;
}
