import { AfterViewInit, Component } from '@angular/core';
import { QuizScreenState } from '../../../shared/enums/quiz-screen-state.enum';

@Component({
  selector: 'app-quiz-screen',
  standalone: false,
  templateUrl: './quiz-screen.component.html',
  styleUrl: './quiz-screen.component.scss',
})
export class QuizScreenComponent implements AfterViewInit {

  quizScreenState = QuizScreenState.QUIZ_OVER;
  quizScreenStateEnum = QuizScreenState;

  ngAfterViewInit(): void {
   
  }
}
