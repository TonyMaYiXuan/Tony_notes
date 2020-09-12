function hideAll() {
    document.getElementById("non_iOS").style.display = "none";
    document.getElementById("iOS").style.display = "none";
}
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
const octokit = new Octokit();
async function showFile() {
    var arrPDFFileName = [], arrDriveFileName = [], arrDriveFileName_tmp = [];
    var userAgent = navigator.userAgent || navigator.vendor || window.opera; // carefully copy from https://stackoverflow.com/a/21742107
    var tmp_string = ((/android/i.test(userAgent))? "/Links_Google_Drive_PDF.txt" : "");
    const response = await octokit.request(("GET /repos/tonymayixuan/Introducing_Rigorous_Mathematics/contents/PDF" + tmp_string), {
        owner: 'tonymayixuan',
        repo: 'Introducing_Rigorous_Mathematics',
        path: 'PDF' + tmp_string
    });
    hideAll();
    if (/android/i.test(userAgent)) { //TODO Better even take into account the resolution of the screen and put the website respectively
        document.getElementById("testing").innerHTML = atob(response.data.content).split("\n");
        arrDriveFileName_tmp = atob(response.data.content).split("\n");
        for (var i = arrDriveFileName_tmp.length - 2 /* last element empty */; i >= 0; i--) {
            arrDriveFileName.push("https://drive.google.com/file/d/" + arrDriveFileName_tmp[i] + "/preview");
        }
        document.getElementById("non_iOS").style.display = "block";
        document.getElementById("main_display").src = arrDriveFileName[0];
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.getElementById("iOS").style.display = "block";
    }
    else {
        response.data.forEach(datum => {if (datum.name.substring(datum.name.lastIndexOf("."), datum.name.length) === ".pdf") {arrPDFFileName[arrPDFFileName.length] = datum.name; }}); // {} to enclose "if", see https://stackoverflow.com/a/37627802
        arrPDFFileName.sort(function (string_a, string_b) {return string_b.localeCompare(string_a)}); // descending order; already ascending alphabetical order of its name when "response"
        document.getElementById("non_iOS").style.display = "block";
        document.getElementById("main_display").src = "https://tonymayixuan.github.io/Introducing_Rigorous_Mathematics/PDF/" + arrPDFFileName[0];
    }
}
showFile(); // be aware that the async function may not be EXECUTED BEFORE the following lines
