function dayNightMode(flag) {
    window.top.dataDict.dayNight = flag;
    var dnModeAttr = { // day night mode attributes
            0: {
                bodyBgImage: 'linear-gradient(to right, #E8FFFF, #FFFFE8)', bodyColor: '#101010', bodyFontFace: 'Calibri', h1Color: '#E080B0', h1FontFace: 'Calibri Light', menuBgColor: '#00FFCC', menuBgImage: 'linear-gradient(to left, #BBFFCC, #FFEED0)', topMargin: 5, leftRightMargin: 6
            },
            1: {
                bodyBgImage: 'linear-gradient(to left, #080040, #200030)', bodyColor: '#A0B0C0', bodyFontFace: 'Calibri', h1Color: '#AAEEFF', h1FontFace: 'Calibri Light', menuBgColor: '#0080B0', menuBgImage: 'linear-gradient(to right, #0080A0, #112233)', topMargin: 5, leftRightMargin: 6
            }
        };
    document.body.style.backgroundImage = dnModeAttr[flag].bodyBgImage;
    document.body.style.color = dnModeAttr[flag].bodyColor;
    document.body.style.fontFamily = dnModeAttr[flag].bodyFontFace;
    document.body.style.marginTop = dnModeAttr[flag].topMargin.toString() + 'px';
    document.body.style.marginLeft = dnModeAttr[flag].leftRightMargin.toString() + 'px';
    document.body.style.marginRight = dnModeAttr[flag].leftRightMargin.toString() + 'px';
    document.getElementsByTagName('h1')[0].style.color = dnModeAttr[flag].h1Color;
    document.getElementsByTagName('h1')[0].style.fontFamily = dnModeAttr[flag].h1FontFace;
    if (window.top.dataDict.inHomePage) {
        document.getElementById('menuTable').style.backgroundImage = dnModeAttr[flag].menuBgImage;
    }
    else {
        document.getElementById('menuTable').style.backgroundImage = 'none';
        document.getElementById('menuTable').style.backgroundColor = dnModeAttr[flag].menuBgColor;
    }
    if ((document.getElementById('mainDisplay').src == 'https://tonymayixuan.github.io/Tony_notes/homePage/index.html') && window.top.dataDict.inDogBoneShape) {
        document.getElementById('mainDisplay').contentWindow.setDogBoneShapeBackground();  //notice that this function uses window.top.dataDict.dayNight, but not local variable 'flag'
    }
    if ((document.getElementById('mainDisplay').src.search('https://tonymayixuan.github.io/Tony_notes/') != -1) && (typeof document.getElementById('mainDisplay').contentWindow.dataDict != 'undefined') && (document.getElementById('mainDisplay').contentWindow.dataDict.src == 'description/index.html')) {
        document.getElementById('mainDisplay').contentWindow.descriptionChangeColor();
    }
}
