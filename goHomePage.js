function menuTableStartClicked() {
    var menuTableInnerHTML = '';
    for (var i = 0; i != Object.keys(window.top.dataDict.papers).length; i++) {
        var paper = window.top.dataDict.papers[Object.keys(window.top.dataDict.papers)[i]];
        var tmp = '<td align=\'center\' onclick=\'window.top.dataDict.currentPaper = {paperName: \'' + paper['Name'] + '\', newest: \'' + paper['File name'][0] + '\'};goHomePage(0);\'>' + paper['File name'][0] + '</td>';
        if (!window.top.dataDict.isAndroid) {
            tmp = '<tr>' + tmp + '</tr>';
        }
        menuTableInnerHTML += tmp;
    }
    if (window.top.dataDict.isAndroid) {
        menuTableInnerHTML = '<tr>' + menuTableInnerHTML + '</tr>';
    }
}
function goHomePage(flag) { //1 for returning home and 0 for leaving home page
    ['buttonReturnHome', 'main'].forEach((item) => {document.getElementById(item).style.display = 'none'; });  // TODO Maybe hide more things
    if (flag) {
        document.getElementById('title').innerHTML = '<h1>Tony\'s note</h1>';
        document.getElementById('menuTable').innerHTML = '<tr><td align=\'center\'><div id=\'menuTableStart\'>START</div></td></tr>';  // menuTableStart used in dayNightMode.js
        alert(menuTableStartClicked); // FOR TESTING
        document.getElementById('menuTableStart').onclick = menuTableStartClicked;
        document.getElementById('mainDisplay').src = 'homePage/index.html';
    } else {
        changePaper(window.top.dataDict.currentPaper.paperName);
    }
    dayNightMode(window.top.dataDict.dayNight);
    document.getElementById('buttonReturnHome').style.display = flag? 'none': 'block';
    document.getElementById('main').style.display = 'block';
}
