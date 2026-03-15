import { state } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-starting-quiz',
  standalone: false,
  templateUrl: './starting-quiz.component.html',
  styleUrl: './starting-quiz.component.scss',
})
export class StartingQuizComponent implements OnInit {
  @Output() startedQuiz = new EventEmitter();

  private startTimerCountdownStates = [
    {
      time: 0,
      state: 'STARTING_QUIZ',
    },
    {
      time: 2000,
      state: 'GETTING_READY',
    },
    {
      time: 4000,
      state: '3',
    },
    {
      time: 5000,
      state: '2',
    },
    {
      time: 6000,
      state: '1',
    },
  ];

  startTimerCountdownState: string = 'STARTING_QUIZ';

  ngOnInit() {
    this.startTimerCountdown();

    setTimeout(
      () => {
        this.startedQuiz.emit();
      },
      this.startTimerCountdownStates[this.startTimerCountdownStates.length - 1].time
    );
  }

  startTimerCountdown() {
    for (const state of this.startTimerCountdownStates) {
      setTimeout(() => {
        this.startTimerCountdownState = state.state;
      }, state.time);
    }
  }
}
