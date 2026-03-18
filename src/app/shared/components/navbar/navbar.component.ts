import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../../../core/services/auth.service';
import { LocalStorageKey } from '../../enums';
import { from, tap } from 'rxjs';
import { ConfirmModalComponent } from '../modals/confirmation-modal/confirm-modal.component';
import { Router } from '@angular/router';
import { getEmailInitials } from '../../../core/utils/email-initials.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent implements OnInit {
  @Input() isMobile: boolean = false;
  userInitials: string = '';

  constructor(
    private authService: AuthService,
    private bsModalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userEmail = localStorage.getItem(LocalStorageKey.USER_EMAIL);
    this.userInitials = getEmailInitials(userEmail);
  }

  logout(): void {
    const message = 'You are trying to logout?';
      const isGoogleLogin = localStorage.getItem(LocalStorageKey.IS_GOOGLE_LOGIN) === 'true';

    const confirmCallback$ = isGoogleLogin ? from(this.authService.firebaseLogout()) : this.authService.logout();

    const initialState = {
      message,
      confirmCallbackObservable: confirmCallback$.pipe(tap(() => {
        this.router.navigate(['/login']);
      })),
    };

    this.bsModalService.show(ConfirmModalComponent, {
      initialState,
      class: 'modal-md',
    });
  }
}
