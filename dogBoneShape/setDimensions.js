var tmp = document.getElementsByName('dogBoneShapeMain')[0].clientWidth;
tmp = dataDict.isAndroid? tmp * 2: tmp;
document.getElementsByName('dogBoneShapeMenuFrame')[0].offsetHeight = tmp;
document.getElementsByName('dogBoneShapeMainDisplay')[0].offsetHeight = tmp;
