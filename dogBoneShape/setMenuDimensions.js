for (var i = 0; i != 4; i++) {
    document.getElementsByTagName('td')[i].offsetWidth = document.getElementById('dogBoneShapeMain').style.clientWidth;
    document.getElementsByTagName('td')[i].offsetHeight = document.getElementById('dogBoneShapeMenu').style.clientWidth / 4;
    document.getElementsByTagName('td')[i].align = 'center';
}
