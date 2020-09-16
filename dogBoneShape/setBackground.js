if (typeof dataDict == "undefined") {dataDict = {dayNight: 1}; }
const bgLinearGradient_const = [[128, 240, 128], [136, 232, 120], [128, 224, 128], [120, 232, 136], [128, 240, 128]], dayNightVariation = 40, repeat = 3;
var bgLinearGradient = [bgLinearGradient_const[0]];
for (var i = 0; i < repeat; i++) {bgLinearGradient.concat(bgLinearGradient_const.slice(1, bgLinearGradient_const.length)); }
var bgImage = 'linear-gradient(', tmp = dataDict.dayNight? -dayNightVariation: dayNightVariation;
bgLinearGradient.forEach(list => {bgImage += 'rgb(' + (list[0] + tmp) + ', ' + (list[1] + tmp) + ', ' + (list[2] + tmp) + '), '; });
document.body.style.backgroundImage = bgImage.substr(0, bgImage.length - 2) + ')';
