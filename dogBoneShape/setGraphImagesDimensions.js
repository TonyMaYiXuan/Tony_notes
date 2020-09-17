var tmp = window.top.dataDict.mainDisplayHeight;
for (var i = 0; i != 3; i++) {
    document.getElementsByTagName('iframe')[i].width = tmp / 3;
    document.getElementsByTagName('iframe')[i].height = tmp / 3;
}
for (var i = 0; i != 6; i++) {
    document.getElementsByTagName('th')[i].width = tmp / 3;
    document.getElementsByTagName('th')[i].align = 'center';
}
for (var i = 0; i != 2; i++) {
    document.getElementsByTagName('td')[i].width = tmp / 3;
    document.getElementsByTagName('td')[i].align = 'center';
}
document.getElementsByTagName('tr')[0].height = tmp / 3;
document.getElementsByTagName('tr')[2].height = tmp / 3;
