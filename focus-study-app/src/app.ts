// app.ts

import { Timer } from './components/Timer';

class FocusStudyApp {
    private timer: Timer;

    constructor() {
        this.timer = new Timer();
        this.initialize();
    }

    private initialize() {
        console.log("Focus Study App Initialized");
        this.startTimer(25 * 60); // Start with a 25-minute timer
    }

    private startTimer(duration: number) {
        this.timer.start(duration);
        this.updateUI();
    }

    private updateUI() {
        // Logic to update the user interface with timer information
        console.log(`Timer started for ${this.timer.getTimeRemaining()} seconds.`);
    }
}

const app = new FocusStudyApp();