class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(`${selector}`);
        this.targetDate = targetDate;
        this.timer();
    };

    timerComponents(time) {
        const count = time;
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const sec = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return ({ time, days, hours, mins, sec })
    }

    pad(value) {
        return String(value).padStart(2, "0");
    };

    timer() {
        const intervalId = setInterval(() => {
            const currentDate = Date.now();
            const time = this.targetDate - currentDate;
            const times = this.timerComponents(time)
            if (time <= 0) {
                clearInterval(intervalId);
                return
            }
            const fields = [...this.selector.children];
            fields.map((field) => {
                const value = field.firstElementChild.dataset.value;
                 if (value === "days") {
                    field.firstElementChild.textContent = times.days;
                };
                 if (value === "hours") {
                    field.firstElementChild.textContent = times.hours;
                };
                 if (value === "mins") {
                    field.firstElementChild.textContent = times.mins;
                };
                 if (value === "secs") {
                    field.firstElementChild.textContent = times.sec;
                };
            })
        }, 1000)
    }
};






new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date("Oct 27, 2021 00:00:00"),
});


