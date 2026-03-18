import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { LocalStorageKey } from '../../shared/enums';
import { CreateUserDto, UserSignInDto } from '../../shared/models';
import { AuthDataService } from '../data-services/auth.data-service';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private authDataService: AuthDataService
  ) {}

  async googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);

    if (credential.user) {
      const token = await credential.user.getIdToken();
      localStorage.setItem(LocalStorageKey.AUTH_TOKEN, token);
      localStorage.setItem(LocalStorageKey.IS_GOOGLE_LOGIN, 'true');
    }
    return credential.user;
  }

  async firebaseLogout() {
    localStorage.removeItem(LocalStorageKey.AUTH_TOKEN);
    localStorage.removeItem(LocalStorageKey.IS_GOOGLE_LOGIN);
    await this.afAuth.signOut();
  }

  registerUser(userData: CreateUserDto) {
    return this.authDataService.register(userData);
  }

  login(useLoginData: UserSignInDto) {
    return this.authDataService.signIn(useLoginData).pipe(
      tap((tokenDto) => {
        localStorage.setItem(LocalStorageKey.AUTH_TOKEN, tokenDto.token);
      })
    );
  }

  logout() {
    return this.authDataService.signOut().pipe(
      tap(() => {
        localStorage.removeItem(LocalStorageKey.AUTH_TOKEN);
      })
    );
  }
}
