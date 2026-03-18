import { PointType } from '../enums/point-type.enum';
import { QuizType } from '../enums/quiz-type.enum';
import { QuizQuestionOptionDto } from './quiz-question-option.dto';

export interface QuizQuestionDto {
  id?: number;
  quizId?: number;
  quizType?: QuizType;
  timeLimit?: number | null;
  pointType?: PointType | null;
  question?: string;
  imageUrl?: string;
  options?: QuizQuestionOptionDto[];
}
