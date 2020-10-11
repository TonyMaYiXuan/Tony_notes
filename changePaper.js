function changePaper(paper) {
    const comfortableColor = '#80E040'; // just a random color comfortable in both night and day mode
    window.top.dataDict.currentPaper = {paperName: paper, newest: window.top.dataDict.papers[paper]['File name'][0]};
    document.getElementById('mainDisplay').src = window.top.dataDict.papers[window.top.dataDict.currentPaper.paperName]['File link'][0];
    var tmpString = window.top.dataDict.papers[paper].Name;
    if (tmpString.length > 71 - window.top.isAndroid * 30) {
        tmpString = tmpString.substr(0, 41) + '...';
    }
    document.getElementById('title').innerHTML = '<h1>' + tmpString + ' <font color=' + comfortableColor + '><i><sub>(Tony\'s notes)</sub></i></font></h1>';
    dayNightMode(window.top.dataDict.dayNight); // update font color of 'title'
}
