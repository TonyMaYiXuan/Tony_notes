var padding = window.top.dataDict.isAndroid? 3: 15;
var fontSize = window.top.dataDict.isAndroid? 4: 20;  // if too small then cannot set
document.body.style.fontSize = fontSize.toString() + 'px';
document.body.style.padding = padding.toString() + 'px';
window.top.dataDict.mainDisplayWidth = document.getElementById('dogBoneShapeMain_').style.width = window.top.dataDict.mainDisplayWidth = document.getElementById('dogBoneShapeMain_').offsetWidth - padding * 2;
window.top.dataDict.mainDisplayWidth = document.getElementById('dogBoneShapeMain_').offsetWidth;
window.top.dataDict.mainDisplayHeight = window.top.dataDict.mainDisplayWidth;
if (window.innerHeight - padding * 2 < window.top.dataDict.mainDisplayHeight) {
    window.top.dataDict.mainDisplayHeight = window.innerHeight - padding * 2;
}
document.getElementsByName('dogBoneShapeMainDisplay')[0].height = window.top.dataDict.mainDisplayHeight;
document.getElementsByTagName('table')[0].height = window.top.dataDict.mainDisplayHeight;
for (var i = 0; i != 4; i++) {
    document.getElementsByTagName('th')[i].width = '100%';
    document.getElementsByTagName('th')[i].height = window.top.dataDict.mainDisplayHeight / 13;
    document.getElementsByTagName('th')[i].align = 'center';
}
