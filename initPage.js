async function initPage() {
    hideAll();
    document.body.style.width = '100%';
    dayNightMode(1);
    if (dataDict.isIOS) {
        document.getElementById('display').style.display = 'block';
        document.getElementById('iOS').style.display = 'block';
        document.getElementById('menuTable').innerHTML = '<tr><td height=\'700px\' align=center><font size=+1 face=\'Consolas\'>iOS not<br>supported</font></td></tr>';
    } else {
        var octokit = new Octokit(); // it must not be 'const' here if there are multiple 'response's below (or else it may not display successfully on phone Chrome browser) 
        const responseDataJSON = await octokit.request('GET /repos/tonymayixuan/Tony_notes/contents/DATA/DATA FOR PAPERS.json', {
            owner: 'tonymayixuan',
            repo: 'Tony_notes',
            path: 'DATA/DATA FOR PAPERS.json'
        });
        dataDict.papers = JSON.parse(atob(responseDataJSON.data.content)); // input a dictionary
        dataDict.currentPaper = {paperName: '', newest: '0000_00_00_00_00'}; // dictionary is better here, for function 'changePaper()'
        for (var i = 0; i != Object.keys(dataDict.papers).length; i++) {
            var thisPaper = Object.keys(dataDict.papers)[i], cntVersion = dataDict.papers[thisPaper]['File name'].length;
            dataDict.papers[thisPaper]['File link'] = [];
            dataDict.papers[thisPaper]['File name'] = dataDict.papers[thisPaper]['File name'].reverse(); // it should be like call by reference
            for (var j = 0; j != cntVersion; j++) {
                dataDict.papers[thisPaper]['File link'][j] = dataDict.isAndroid? ('https://drive.google.com/file/d/' + dataDict.papers[thisPaper]['Google Drive file link'][cntVersion - 1 - j] + '/preview'): ('DATA/PDF/' + dataDict.papers[thisPaper]['File name'][j] + '.pdf'); // believe no need absolute path, or else may simply put in another repository (so that I don't need to pull pdf to local)
            }
            var tmpStr = dataDict.papers[thisPaper]['File name'][0];
            if (tmpStr.localeCompare(dataDict.currentPaper.newest) >= 0) {
                dataDict.currentPaper = {paperName: thisPaper, newest: tmpStr};
            }
        }
        document.getElementById('menu').style.cssFloat = dataDict.isAndroid? 'inherit': 'left';
        document.getElementById('menu').style.width = dataDict.isAndroid? '100%': '95%';
        document.getElementById('display').style.cssFloat = dataDict.isAndroid? 'inherit': 'right';
        changePaper(dataDict.currentPaper.paperName);
        document.getElementById('display').style.display = 'block';
        document.getElementById('non_iOS').style.display = 'block';
        document.getElementById('menuTable').innerHTML += '<tr><td height=\'30px\' align=center><font size=+1 face=\'Calibri\'><a href=\'tips.html\' target=\'mainDisplay\'><i>Tips</i></a></font></td></tr>';
        for (var i = 0; i < dataDict.papers[dataDict.currentPaper.paperName]['File link'].length; i++) {
            document.getElementById('menuTable').innerHTML += '<tr><td height=\'35px\' align=center><font size=+1 face=\'Calibri\'><a href=\'' + dataDict.papers[dataDict.currentPaper.paperName]['File link'][i] + '\' target=\'mainDisplay\'>' + dataDict.papers[dataDict.currentPaper.paperName]['File name'][i] + '</a></font></td></tr>';
        }
    }
    dateTimeDisplay(); // after the page is loaded
}
