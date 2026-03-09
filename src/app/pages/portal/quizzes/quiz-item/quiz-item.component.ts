import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrl: './quiz-item.component.scss',
  standalone: false,
})
export class QuizItemComponent {
  @Input() imageNo: number = 1;  
}
