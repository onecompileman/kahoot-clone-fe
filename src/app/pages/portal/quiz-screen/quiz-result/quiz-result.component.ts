import { AfterViewInit, Component, OnDestroy } from '@angular/core';

// @ts-ignore
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-quiz-result',
  standalone: false,
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.scss'
})
export class QuizResultComponent implements AfterViewInit, OnDestroy {

  private confettiIntervalId: ReturnType<typeof setInterval> | null = null;

  ngAfterViewInit(): void {
    this.startContinuousConfetti();
  }

  ngOnDestroy(): void {
    if (this.confettiIntervalId) {
      clearInterval(this.confettiIntervalId);
      this.confettiIntervalId = null;
    }
  }

  private startContinuousConfetti(): void {
    this.triggerConfetti();

    this.confettiIntervalId = setInterval(() => {
      this.triggerConfetti();
    }, 1200);
  }

  private triggerConfetti(): void {
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { x: 0.15, y: 0.65 }
    });

    confetti({
      particleCount: 80,
      spread: 65,
      origin: { x: 0.85, y: 0.65 }
    });
  }

}
