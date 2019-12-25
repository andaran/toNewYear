var flag = false;
var interval = setInterval(clock, 10);
var interval2 = setInterval(rgbFunc, 100);

function clock() {

    if (new Date().getDate() == 31 && new Date().getHours() == 0 && new Date().getMinutes() == 0) {
        flag = true;
    }

    if (flag == false) {
        document.getElementById('newYear').style.display = 'none';

        var days = document.getElementById('days');
        var hours = document.getElementById('hours');
        var minutes = document.getElementById('minutes');
        var seconds = document.getElementById('seconds');
        var millis = document.getElementById('millis');

        days.innerHTML = 31 - new Date().getDate();
        hours.innerHTML = (24 - new Date().getHours()) - 1;
        minutes.innerHTML = (60 - new Date().getMinutes()) - 1;
        seconds.innerHTML = (60 - new Date().getSeconds()) - 1;
        millis.innerHTML = 100 - parseInt(((new Date().getMilliseconds()) / 10)) - 1;
    } else {
        document.getElementById('newYear').style.display = 'block';
        document.getElementById('wrap').style.display = 'none';
    }
}

function rgbFunc() {
    var red = Math.random() * 255;
    var green = Math.random() * 255;
    var blue = Math.random() * 255;
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById('newYear').style.color = color;
}