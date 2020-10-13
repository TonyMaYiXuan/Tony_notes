function setDogBoneShapeBackground() {
    const bgLinearGradient_const = [[150, 270, 150], [166, 262, 150], [158, 254, 158], [150, 262, 166], [150, 270, 150]], dayNightVariation = 70, repeat = 4;
    var bgLinearGradient = [bgLinearGradient_const[0]];
    for (var i = 0; i < repeat; i++) {bgLinearGradient.concat(bgLinearGradient_const.slice(1, bgLinearGradient_const.length)); }
    var bgImage = '', tmp = window.top.dataDict.dayNight? -dayNightVariation: dayNightVariation;
    bgLinearGradient_const.forEach(list => {bgImage += 'rgb(' + (list[0] + tmp) + ', ' + (list[1] + tmp) + ', ' + (list[2] + tmp) + '), '; });
    document.body.style.backgroundImage = 'linear-gradient(to right, ' + bgImage.substr(0, bgImage.length - 2) + ')';
}
