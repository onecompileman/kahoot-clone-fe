import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthDataService } from '../data-services/auth.data-service';
import { LocalStorageKey } from '../../shared/enums';

@Injectable({
  providedIn: 'root',
})
export class InitialResolver implements Resolve<any> {
  constructor(
    private readonly authDataService: AuthDataService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return new Observable((observer) => {
      this.authDataService.getCurrentUser().subscribe({
        next: (user) => {
          localStorage.setItem(LocalStorageKey.USER_EMAIL, user.email);
          observer.next(user);
          observer.complete();
        },
        error: (err) => {
          this.router.navigate(['/login']);
          observer.error(err);
        },
      });
    });
  }
}
