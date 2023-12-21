
const interval = setInterval(() => {

    /* read time */
    const date = new Date();

    /* if new year did come */
    if (date.getDate() == 1 && date.getHours() == 0 && date.getMinutes() == 0 || date.getFullYear() > 2023) {
        clearInterval(interval);
        document.getElementById('newYear').style.display = 'block';
        document.getElementById('wrap').style.display = 'none';
        document.getElementById('snow').style.visibility = 'hidden';

        /* run salut */
        a.run();
        return;
    }

    /* tick timer */
    document.getElementById('days').innerText = 31 - date.getDate();
    document.getElementById('hours').innerText = (24 - date.getHours()) - 1;
    document.getElementById('minutes').innerText = (60 - date.getMinutes()) - 1
    document.getElementById('seconds').innerText = (60 - date.getSeconds()) - 1
    document.getElementById('millis').innerText = 100 - parseInt(((date.getMilliseconds()) / 10)) - 1
}, 10);
