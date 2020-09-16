function addLeadingZero(n) {  // n is a string
    return ((n < 10)? ('0' + n): n);
}
function dateTimeDisplay() {
    var today = new Date();
    document.getElementById('datetime').innerHTML = today.getFullYear() + '-' + addLeadingZero(today.getMonth() + 1) + '-' + addLeadingZero(today.getDate()) + ' ' + addLeadingZero(today.getHours()) + ':' + addLeadingZero(today.getMinutes()) + ':' + addLeadingZero(today.getSeconds());
    document.getElementById('datetime').style.color = '#50F0A0';
    document.getElementById('datetime').style.face = 'Consolas';
}
