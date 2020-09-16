function changePaper(paper) {
    const comfortableColor = '#80E040'; // just a random color comfortable in both night and day mode
    dataDict.currentPaper = {paperName: paper, newest: dataDict.papers[paper]['File name'][0]};
    document.getElementById('mainDisplay').src = dataDict.papers[dataDict.currentPaper.paperName]['File link'][0];
    document.getElementById('title').innerHTML = '<h1>' + dataDict.papers[paper].Name + ' <font color=' + comfortableColor + '><i><sub>(Tony\'s notes)</sub></i></font></h1>';
}
