import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest';
var externalJS: ['initDataDict.js', 'dateTimeDisplay.js', 'dayNightMode.js', 'changePaper.js', 'goHomePage.js', 'initPage.js'];
function getExternalJS() {
    dataDict.externalJS.forEach(item => {
        var js = document.createElement('script');
        document.body.appendChild(js);
        js.src='item';
    });
}
getExternalJs();
function hideAll() { // to show that the loading of page is not finished
    document.getElementById('display').style.display = 'none';
    document.getElementById('homePage').style.display = 'none';
}
initPage(); // be aware that the async function may not be EXECUTED BEFORE the following lines
