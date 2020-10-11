function menuTableStartClickedSub(i) {
    i = parseInt(i);
    var paper = window.top.dataDict.papers[Object.keys(window.top.dataDict.papers)[i]];
    window.top.dataDict.currentPaper = {paperName: Object.keys(window.top.dataDict.papers)[i], newest: paper['File name'][0]};
}
function menuTableStartClicked() /* simply change menuTable content */ {
    document.getElementById('menuTable').style.display = 'none';
    var menuTableInnerHTML = '';
    for (var i = 0; i != Object.keys(window.top.dataDict.papers).length; i++) {
        var paper = window.top.dataDict.papers[Object.keys(window.top.dataDict.papers)[i]];
        var tmp = 'align=\'center\'><a onclick=\'menuTableStartClickedSub(' + i.toString() + ');goHomePage(0);\'>' + paper['Name'] + '</a></td>';
        menuTableInnerHTML += window.top.dataDict.isAndroid? ('<td ' + tmp) /* same as width of menuTable */: ('<tr><td width=\'90%\' ' + tmp + '</tr>');
    }
    if (window.top.dataDict.isAndroid) {
        menuTableInnerHTML = '<tr>' + menuTableInnerHTML + '</tr>';
    }
    document.getElementById('menuTable').innerHTML = menuTableInnerHTML;
    document.getElementById('menuTable').style.display = 'block';
}
function goHomePage(flag) { //1 for returning home and 0 for leaving home page
    var elementsToHide = ['buttonReturnHome', 'main']; // TODO Maybe hide more things here
    elementsToHide.forEach((item) => {document.getElementById(item).style.display = 'none'; });
    if (flag) {
        document.getElementById('title').innerHTML = '<h1>Tony\'s note</h1>';
        var menuTableInnerHTML = ' align=\'center\'>START</td></tr>';
        document.getElementById('menuTable').innerHTML = (window.top.dataDict.isAndroid? '<tr><td': '<tr><td width=\'90%\'') + menuTableInnerHTML;
        document.getElementById('menuTableStart').onclick = menuTableStartClicked;
        document.getElementById('mainDisplay').src = 'homePage/index.html';
    } else {
        changePaper(window.top.dataDict.currentPaper.paperName);
    }
    window.top.dataDict.inHomePage = parseInt(flag);
    dayNightMode(window.top.dataDict.dayNight);
    document.getElementById('buttonReturnHome').style.display = flag? 'none': 'block';
    document.getElementById('main').style.display = 'block';
}
