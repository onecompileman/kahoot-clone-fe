import { PointType } from '../enums/point-type.enum';
import { QuizType } from '../enums/quiz-type.enum';
import { QuizQuestionOptionCreateDto } from './quiz-question-option-create.dto';

export interface QuizQuestionCreateDto {
  quizType: QuizType;
  timeLimit?: number | null;
  pointType?: PointType | null;
  question: string;
  imageUrl?: string;
  file?: File | Blob | null;
  options: QuizQuestionOptionCreateDto[];
}
