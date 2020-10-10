function dayNightMode(flag) {
    var dnModeAttr = { // day night mode attributes
            0: {
                bodyBgImage: 'linear-gradient(to right, #E8FFFF, #FFFFE8)', bodyColor: '#101010', bodyFontFace: 'Calibri', h1Color: '#E080B0', h1FontFace: 'Calibri Light', menuBgColor: '#00FFCC', topMargin: 5, leftRightMargin: 6
            },
            1: {
                bodyBgImage: 'linear-gradient(to left, #080040, #200030)', bodyColor: '#A0B0C0', bodyFontFace: 'Calibri', h1Color: '#AAEEFF', h1FontFace: 'Calibri Light', menuBgColor: '#0060A0', topMargin: 4, leftRightMargin: 5
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
    document.getElementById('menuTable').style.backgroundColor = dnModeAttr[flag].menuBgColor;
    var menuTableHome = document.getElementById('menuTableHome');
    if (typeof menuTableHome != 'undefined' && menuTableHome != null) {
        menuTableHome.style.backgroundImage = flag? 'linear-gradient(to bottom, #284838, #082230)': 'linear-gradient(to left, #F0BBFF, #FFAAD0)';
    }
}
