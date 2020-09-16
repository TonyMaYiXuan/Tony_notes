function goHomePage(flag) { //1 for return home and 0 for leaving home page
    hideAll();
    if (flag) {
        document.getElementById('title').innerHTML = '<h1>Tony\'s note</h1>';
        document.getElementById('menuTable').innerHTML = '<tr><td align=\'center\'><div id=\'menuTableHome\'>START</div></td></tr>';
        document.getElementById('menuTableHome').style.backgroundImage = datadict.dayNight? 'linear-gradient(to top left, #284838, #082230)': 'linear-gradient(to left, #F0BBFF, #FFAAD0)';
        document.getElementById('homePage').src = 'homePage/homePage.html';
    } else {
        changePaper(dataDict.currentPaper.paperName);
    }
    document.getElementById('buttonReturnHome').display.style = flag? 'none': 'block';
    document.getElementById(flag? 'homePage': 'display').display.style = 'block';
}
