function addLeadingZero(x) {
    return ((x < 10)? ("0" + x): x);
}
var today = new Date();
document.getElementById("datetime").innerHTML = today.getFullYear() + "-" + addLeadingZero(today.getMonth() + 1) + "-" + addLeadingZero(today.getDate()) + " " + addLeadingZero(today.getHours()) + ":" + addLeadingZero(today.getMinutes()) + ":" + addLeadingZero(today.getSeconds());
document.getElementById("datetime").style.color = "#50F0A0"; // NEED quotes here
document.getElementById("datetime").style.face = "Consolas";
