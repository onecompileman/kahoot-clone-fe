import { AnswerColor } from '../enums';

export interface QuizQuestionOptionDto {
  id?: number;
  quizQuestionId?: number;
  answerColor?: AnswerColor | string;
  answerText?: string;
  imageUrl?: string;
  isCorrect?: boolean;
}
