import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { AddQuizComponent } from './quizzes/add-quiz/add-quiz.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: '',
        component: QuizzesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'start-quiz/:quizId',
        component: StartQuizComponent,
      },
      {
        path: 'quiz-screen',
        component: QuizScreenComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
