
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

// it connects to our id in html page hour minute second
const hourhand = document.getElementById("hour");
const minutehand = document.getElementById("minute");
const secondhand = document.getElementById("second");

// updating clock
function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const formattedHour = formatTime(hours);
    const formattedMinute = formatTime(minutes);
    const formattedSecond = formatTime(seconds);
    console.log(`H: ${hours}, M: ${minutes}, S: ${seconds}`);

    const digitalTime = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    document.getElementById("time").innerText = digitalTime;

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    if (seconds === 0) {
        secondhand.style.transition = 'none';
    } else {
        secondhand.style.transition = 'all 0.5s easy-in-out';
    }

    secondhand.style.transform = `rotate(${secondDeg - 90}deg)`;
    minutehand.style.transform = `rotate(${minuteDeg - 90}deg)`;
    hourhand.style.transform = `rotate(${hourDeg - 90}deg)`;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec",];

    const day = days[now.getDay()];
    const date = `${formatTime(now.getDate())} ${months[now.getMonth()]} ${now.getFullYear()}`;

    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;

    const tick = document.getElementById("tickSound");
    if (tick) {
        tick.currentTime = 0;
        tick.play();
    }




}

setInterval(updateClock, 1000)
updateClock();