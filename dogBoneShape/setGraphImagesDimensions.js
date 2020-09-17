var tmp = document.getElementById('dogBoneShapeMain').clientWidth;
for (var i = 1; i != 4; i++) {
    document.getElementsByName('graphImagesFrame' + i.toString())[0].offsetWidth = tmp / 3;
    document.getElementsByName('graphImagesFrame' + i.toString())[0].offsetHeight = tmp / 3;
}
for (var i = 0; i != 8; i++) {
    document.getElementsByTagName(i > 5? 'td': 'th')[i].offsetWidth = tmp / 3;
    document.getElementsByTagName(i > 5? 'td': 'th')[i].align = 'center';
}
document.getElementsByTagName('tr')[0].offsetHeight = tmp / 3;
document.getElementsByTagName('tr')[1].offsetHeight = tmp / 11;
document.getElementsByTagName('tr')[0].offsetHeight = tmp / 3;
document.getElementsByTagName('tr')[1].offsetHeight = tmp / 12;
document.getElementsByTagName('img')[0].offsetHeight = tmp / 11;
document.getElementsByTagName('img')[0].offsetHeight = tmp * 6417 / 1438 / 12;
document.getElementsByTagName('img')[1].offsetHeight = tmp / 11;
document.getElementsByTagName('img')[1].offsetHeight = tmp * 6417 / 911 / 12;
