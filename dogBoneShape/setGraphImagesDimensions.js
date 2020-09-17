var tmp = document.getElementsByName('dogBoneShapeMain')[0].clientWidth;
for (var i = 1; i != 4; i++) {
    document.getElementsByName('graphImagesFrame' + i.toString())[0].style.height = tmp / 3;
    document.getElementsByName('graphImagesFrame' + i.toString())[0].style.width = tmp / 3;
}
document.getElementsByTagName('tr')[0].style.height = tmp / 3;
document.getElementsByTagName('tr')[1].style.height = tmp / 11;
document.getElementsByTagName('tr')[0].style.height = tmp / 3;
document.getElementsByTagName('tr')[1].style.height = tmp / 12;
document.getElementsByTagName('img')[0].style.height = tmp / 11;
document.getElementsByTagName('img')[0].style.height = tmp * 6417 / 1438 / 12;
document.getElementsByTagName('img')[1].style.height = tmp / 11;
document.getElementsByTagName('img')[1].style.height = tmp * 6417 / 911 / 12;
for (var i = 0; i != 8; i++) {
    document.getElementsByTagName(i > 5? 'td': 'th')[i].style.width = tmp / 3;
    document.getElementsByTagName(i > 5? 'td': 'th')[i].style.textAlign = 'center';
}
