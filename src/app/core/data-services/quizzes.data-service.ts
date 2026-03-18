import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateQuizCommand, QuizDto } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class QuizzesDataService {
  private readonly basePath = '/api/Quiz';

  constructor(private readonly http: HttpClient) {}

  getQuizzes(): Observable<QuizDto[]> {
    return this.http.get<QuizDto[]>(this.basePath);
  }

  createQuiz(payload: CreateQuizCommand | FormData): Observable<QuizDto> {
    return this.http.post<QuizDto>(this.basePath, payload);
  }
}
