class Timer {
    private duration: number;
    private remainingTime: number;
    private isActive: boolean;

    constructor() {
        this.duration = 0;
        this.remainingTime = 0;
        this.isActive = false;
    }

    start(duration: number) {
        this.duration = duration;
        this.remainingTime = duration;
        this.isActive = true;
        this.countdown();
    }

    pause() {
        this.isActive = false;
    }

    reset() {
        this.remainingTime = this.duration;
        this.isActive = false;
    }

    getTimeRemaining() {
        return this.remainingTime;
    }

    private countdown() {
        if (this.isActive && this.remainingTime > 0) {
            setTimeout(() => {
                this.remainingTime--;
                this.countdown();
            }, 1000);
        } else if (this.remainingTime === 0) {
            this.isActive = false;
        }
    }
}

export default Timer;