for (var i = 0; i != 4; i++) {
    document.getElementsByTagName('td')[i].style.height = document.getElementsByName('dogBoneShapeMainDisplay')[0].clientWidth / 4;
    document.getElementsByTagName('td')[i].style.width = document.getElementsByName('dogBoneShapeMenu')[0].clientWidth;
    document.getElementsByTagName('td')[i].style.textAlign = 'center';
}
