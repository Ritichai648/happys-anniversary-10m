const startDate = new Date(2024, 0, 28); 

function calculateTimePassed() {
    const currentDate = new Date(); 
    const timeDifference = currentDate - startDate; 

    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursPassed = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesPassed = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsPassed = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
        days: daysPassed,
        hours: hoursPassed,
        minutes: minutesPassed,
        seconds: secondsPassed
    };
}

function updateTime() {
    const timePassed = calculateTimePassed();

    document.getElementById("Daypassed").textContent = timePassed.days;
    document.getElementById("Hourpassed").textContent = timePassed.hours;
    document.getElementById("Minpassed").textContent = timePassed.minutes;
    document.getElementById("Secpassed").textContent = timePassed.seconds;
}

setInterval(updateTime, 1000);

updateTime();
