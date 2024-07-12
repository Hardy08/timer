let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null; // Reset timer variable
}

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("hours").innerHTML = `<span class="animated-digit">${pad(hours)}</span>`;
    document.getElementById("minutes").innerHTML = `<span class="animated-digit">${pad(minutes)}</span>`;
    document.getElementById("seconds").innerHTML = `<span class="animated-digit">${pad(seconds)}</span>`;

    // Trigger animation on new content
    setTimeout(() => {
        document.querySelectorAll('.animated-digit').forEach(el => {
            el.classList.remove('animated-digit');
            void el.offsetWidth; // Trigger reflow to restart animation
            el.classList.add('animated-digit');
        });
    }, 50);
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
