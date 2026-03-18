import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TermsConditionModalComponent } from '../../../shared/components/modals/terms-condition-modal/terms-condition-modal.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LocalStorageKey } from '../../../shared/enums';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});
  public isLoggingIn: boolean = false;
  public isLoginError: boolean = false;
  public isRegistrationSuccess: boolean = false;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkIfUserIsAlreadyLoggedIn();
    this.initializeLoginForm();
    this.route.queryParams.subscribe((params) => {
      if (params['registered'] === 'true') {
        this.isRegistrationSuccess = true;
      } else {
        this.isRegistrationSuccess = false;
      }
    });
  }

  openTermsConditionModal() {
    this.modalService.show(TermsConditionModalComponent, {
      class: 'modal-lg',
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoggingIn = true;
    this.isLoginError = false;
    const { email, password } = this.loginForm.value;
    this.authService
      .login({
        userName: email,
        password: password,
      })
      .subscribe({
        next: () => {
          this.isLoggingIn = false;
          this.router.navigate(['/portal']);
        },
        error: () => {
          this.isLoggingIn = false;
          this.isLoginError = true;
        },
      });
  }

  loginViaGoogle() {
    this.isLoggingIn = true;
    this.isLoginError = false;
    this.authService
      .googleLogin()
      .then(() => {
        this.isLoggingIn = false;
        this.router.navigate(['/portal']);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private checkIfUserIsAlreadyLoggedIn(): void {
    if (localStorage.getItem(LocalStorageKey.AUTH_TOKEN)) {
      this.router.navigate(['/portal']);
    }
  }

  private initializeLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
}
