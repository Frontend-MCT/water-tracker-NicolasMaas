class ProgressTracker {
    constructor(options) {
        // console.log("⚙", options, "⚙");

        this.options = options;

        this.percentageValue = 0;
        this.currentProgress = [] //dataAccess[this.options.mode].getProgressOfToday() || [];
        this.timerId = null;

        this.percentageRatio = 100 / this.options.dailyGoal;

        this.percentage = document.querySelector(`.${this.options.domRefs.percentage}`);
        this.timeStampHolder = document.querySelector(`.${this.options.domRefs.timeStampHolder}`);
        this.addButton = document.querySelector(`.${this.options.domRefs.addButton}`);

        this.currentGoalHolders = document.querySelectorAll(`.${this.options.domRefs.currentGoal}`);
        this.currentUnitsHolders = document.querySelectorAll(`.${this.options.domRefs.currentUnits}`);

        this.showUserOptions();
        this.restoreProgress();
        this.listenToNewLogging();
    };

    restoreProgress() {
        this.currentProgress = dataAccess[this.options.mode].getProgressByDate(new Date());

        for (const p of this.currentProgress) {
            this.updateProgress(p);
        }
    };

    updateProgress(newLogging = ['00:00', 0]) {
        // this.currentProgress.push(newLogging);
        this.showTimeStamp(newLogging[0]);

        const oldProgress = this.percentageValue,
            newProgress = oldProgress + newLogging[1] * this.percentageRatio;

        this.percentageValue = newProgress;

        let v = oldProgress;

        if (this.timerId) {
            clearInterval(this.timerId);
        }

        this.timerId = setInterval(() => {
            this.percentage.innerText = v;
            if (v >= newProgress) {
                clearInterval(this.timerId);
            }
            v++
        }, 32);

        this.options.afterUpdate(newProgress); // When finished, pass the new progress
    };

    showUserOptions() {
        for (const g of this.currentGoalHolders) {
            g.innerHTML = this.options.dailyGoal;
        };

        for (const u of this.currentUnitsHolders) {
            u.innerHTML = this.options.units;
        }
    };

    showTimeStamp(timeStamp) {
        this.timeStampHolder.innerHTML += `<li class="c-time-stamp">${timeStamp}</li>`;
    };

    listenToNewLogging() {
        this.addButton.addEventListener('click', () => {
            console.log("💦", this.addButton.dataset.amount, "💦");

            const now = new Date();
            const time = `${now.getHours()}:${now.getMinutes()}`;
            const amount = this.addButton.dataset.amount;

            this.updateProgress([time, amount]);
            // dataAccess[this.options.mode].saveLogging([time, amount]);
        });
    };
};