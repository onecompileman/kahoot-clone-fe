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


@NgModule({
  declarations: [
    PortalComponent,
    QuizItemComponent,
    QuizzesComponent,
    AddQuizComponent,
    QuizFormComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class PortalModule { }
