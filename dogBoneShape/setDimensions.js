var tmp = document.getElementsByName('dogBoneShapeMain')[0].clientWidth;
tmp = dataDict.isAndroid? tmp * 2: tmp;
document.getElementsByName('dogBoneShapeMain')[0].height = tmp;
document.getElementsByName('dogBoneShapeMenuFrame')[0].height = tmp;
