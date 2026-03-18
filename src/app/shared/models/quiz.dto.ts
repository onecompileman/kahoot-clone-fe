import { QuizQuestionDto } from './quiz-question.dto';

export interface QuizDto {
  id?: number;
  title?: string;
  isPublished?: boolean;
  identityUserId?: string;
  createdAt?: string;
  lastModifiedDate?: string | null;
  questions?: QuizQuestionDto[];
}
