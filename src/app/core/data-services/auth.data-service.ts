import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../../shared/models/create-user.dto';
import { TokenDto } from '../../shared/models/token.dto';
import { UserSignInDto } from '../../shared/models/user-sign-in.dto';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthDataService {
  private readonly basePath = '/Auth';

  constructor(private readonly http: HttpClient) {}

  signIn(payload: UserSignInDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(`${this.basePath}/sign-in`, payload);
  }

  register(payload: CreateUserDto): Observable<void> {
    return this.http.post<void>(`${this.basePath}/register`, payload);
  }

  signOut(): Observable<any> {
    return this.http.post<TokenDto>(`${this.basePath}/sign-out`, {});
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.basePath}/get-current-user`);
  }
}
