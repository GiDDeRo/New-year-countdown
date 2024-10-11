const day = document.getElementById("day");
const dayText = document.getElementById("dayText");
const hour = document.getElementById("hour");
const hourText = document.getElementById("hourText");
const minute = document.getElementById("minute");
const minuteText = document.getElementById("minuteText");
const second = document.getElementById("second");
const secondText = document.getElementById("secondText");

let nextYearDate = new Date("Jan 01 2025 00:00:00");
let targetMonth = nextYearDate.getMonth() + 12;
console.log(targetMonth)
nextYearDate = nextYearDate.getTime()


function countDown () {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentTime = currentDate.getTime();

    const difference = nextYearDate - currentTime;

    if(difference > 0) {
        const seconds = Math.floor(difference /  1000 % 60)
        const minutes = Math.floor(difference / (1000 * 60) % 60)
        const hours = Math.floor(difference / (1000 * 60 * 60) % 24)
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))

        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
    } else {
        clearInterval(countDown)
        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "00";
    }

}

setInterval((countDown), 1000)