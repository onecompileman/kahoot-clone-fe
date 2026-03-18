import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../../shared/shared.module';
import { QuizItemComponent } from './quizzes/quiz-item/quiz-item.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { AddQuizComponent } from './quizzes/add-quiz/add-quiz.component';
import { QuizFormComponent } from './quizzes/add-quiz/quiz-form/quiz-form.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';
import { JoinScreenComponent } from './quiz-screen/join-screen/join-screen.component';
import { StartingQuizComponent } from './quiz-screen/starting-quiz/starting-quiz.component';
import { QuestionScreenComponent } from './quiz-screen/question-screen/question-screen.component';
import { QuestionAnswerComponent } from './quiz-screen/question-answer/question-answer.component';
import { ScoreboardComponent } from './quiz-screen/scoreboard/scoreboard.component';
import { QuizResultComponent } from './quiz-screen/quiz-result/quiz-result.component';
import { QuestionFormComponent } from './quizzes/add-quiz/question-form/question-form.component';

@NgModule({
  declarations: [
    PortalComponent,
    QuizItemComponent,
    QuizzesComponent,
    AddQuizComponent,
    QuizFormComponent,
    QuestionFormComponent,
    StartQuizComponent,
    QuizScreenComponent,
    JoinScreenComponent,
    StartingQuizComponent,
    QuestionScreenComponent,
    QuestionAnswerComponent,
    ScoreboardComponent,
    QuizResultComponent,
  ],
  imports: [CommonModule, PortalRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class PortalModule {}
