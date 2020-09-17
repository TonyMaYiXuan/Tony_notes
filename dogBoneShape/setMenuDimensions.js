for (var i = 0; i != 4; i++) {
    document.getElementsByTagName('td')[i].offsetWidth = document.getElementsByName('dogBoneShapeMainDisplay')[0].clientWidth;
    document.getElementsByTagName('td')[i].offsetHeight = document.getElementsByName('dogBoneShapeMenu')[0].clientWidth / 4;
    document.getElementsByTagName('td')[i].align = 'center';
}
