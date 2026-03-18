import { QuizQuestionCreateDto } from './quiz-question-create.dto';

export interface CreateQuizCommand {
  title: string;
  isPublished: boolean;
  identityUserId?: string;
  questions: QuizQuestionCreateDto[];
}
