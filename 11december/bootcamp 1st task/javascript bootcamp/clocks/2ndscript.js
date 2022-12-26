const hourshandle=document.getElementById("hours")
const minuteshandle=document.getElementById("minutes")
const secondshandle=document.getElementById("seconds")

function startClock() {
    const how = new Date();

    const sec = how.getSeconds();
    const secDegrees = ((sec / 60) * 360) + 90;
    secondshandle.style.transform = `rotate(${secDegrees}deg)`;


    const mins = how.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((sec / 60) * 6) + 90;
    minuteshandle.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = how.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourshandle.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(startClock, 1000);
startClock();