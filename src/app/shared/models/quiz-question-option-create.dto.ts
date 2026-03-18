import { AnswerColor } from '../enums/answer-color.enum';

export interface QuizQuestionOptionCreateDto {
  answerColor?: AnswerColor | string;
  answerText: string;
  imageUrl?: string;
  isCorrect?: boolean;
}
