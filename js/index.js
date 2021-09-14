$(document).ready(function () {
    $('#main').fireworks({ sound: false, opacity: 0.4, width: '100%', height: '100%' });
});

var countDownDate = new Date("Sep 15, 2021 00:00:00").getTime();

// cập nhập thời gian sau mỗi 1 giây
var x = setInterval(function () {

    // Lấy thời gian hiện tại
    var now = new Date().getTime();

    // Lấy số thời gian chênh lệch
    var distance = countDownDate - now;

    // Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HIển thị chuỗi thời gian trong thẻ p
    document.getElementById("ngay").innerHTML = days;
    document.getElementById("gio").innerHTML = hours;
    document.getElementById("phut").innerHTML = minutes;
    document.getElementById("giay").innerHTML = seconds;

    // Nếu thời gian kết thúc, hiển thị chuỗi thông báo
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ngay").innerHTML = 0;
        document.getElementById("gio").innerHTML = 0;
        document.getElementById("phut").innerHTML = 0;
        document.getElementById("giay").innerHTML = 0;
    }
}, 1000);