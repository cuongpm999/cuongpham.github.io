$(document).ready(function () {
    $('#main').fireworks({ sound: false, opacity: 0.6, width: '100%', height: '100%' });
});

var x = setInterval(function () {
    var now = new Date();

    var hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
    var minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
    var seconds = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();

    document.getElementById("gio").innerHTML = hours;
    document.getElementById("phut").innerHTML = minutes;
    document.getElementById("giay").innerHTML = seconds;

}, 1000);