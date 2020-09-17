for (var i = 0; i != 4; i++) {
    document.getElementsByTagName('td')[i].offsetWidth = document.getElementById('dogBoneShapeMain').clientWidth;
    document.getElementsByTagName('td')[i].offsetHeight = document.getElementById('dogBoneShapeMenu').clientWidth / 4;
    document.getElementsByTagName('td')[i].align = 'center';
}
