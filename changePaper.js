function changePaper(paper) {
    const comfortableColor = '#80E040'; // in both night and day mode
    window.top.dataDict.currentPaper = {paperName: paper, newest: window.top.dataDict.papers[paper]['File name'][0]};
    document.getElementById('mainDisplay').src = window.top.dataDict.papers[paper]['File link'][0];
    var tmpString = window.top.dataDict.papers[paper].Name;
    if (tmpString.length > 71 - window.top.isAndroid * 30) {
        tmpString = tmpString.substr(0, 41) + '...';
    }
    document.getElementById('title').innerHTML = '<h1>' + tmpString + ' <font color=' + comfortableColor + '><i><sub>(Tony\'s notes)</sub></i></font></h1>';
    var menuTableInnerHTML = 'align=\'center\'><font size=+1><a href=\'tips.html\' target=\'mainDisplay\'><i>T I P S</i></a></font></td>';
    var menuTableInnerHTML = (window.top.dataDict.isAndroid? ('<td ' + menuTableInnerHTML): ('<tr><td height=\'30px\' ' + menuTableInnerHTML + '</tr>'));
    for (var i = 0; i < window.top.dataDict.papers[paper]['File link'].length; i++) {
        var tmp = 'align=\'center\'><font size=+1 face=\'Calibri\'><a href=\'' + window.top.dataDict.papers[paper]['File link'][i] + '\' target=\'mainDisplay\'>' + window.top.dataDict.papers[paper]['File name'][i] + '</a></font></td>';
        menuTableInnerHTML += (window.top.dataDict.isAndroid? ('<td ' + tmp): ('<tr><td height=\'35px\' width=\'' + window.top.dataDict.menuWidth + 'px\' ' + tmp + '</tr>'));
    }
    if (window.top.dataDict.isAndroid) {
        menuTableInnerHTML = '<tr>' + menuTableInnerHTML + '</tr>';
    }
    document.getElementById('menuTable').innerHTML = menuTableInnerHTML;
    dayNightMode(window.top.dataDict.dayNight); // update font color of 'title', and more
}
