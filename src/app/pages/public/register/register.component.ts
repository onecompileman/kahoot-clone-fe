import { Component, OnInit } from '@angular/core';
import { TermsConditionModalComponent } from '../../../shared/components/modals/terms-condition-modal/terms-condition-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PublicNavbarService } from '../../../core/services/public-navbar.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  passwordValidators,
  passwordsMatchValidator,
} from '../../../shared/validators/password.validators';
import { AuthDataService } from '../../../core/data-services/auth.data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({});

  public isRegistering: boolean = false;
  public registerErrorMessage: string = '';

  constructor(
    private modalService: BsModalService,
    private navbarService: PublicNavbarService,
    private formBuilder: FormBuilder,
    private authDataService: AuthDataService,
    private router: Router
  ) {}

  get passwordControl(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  get isPasswordMismatch(): boolean {
    const confirmPasswordControl = this.registerForm.get('confirmPassword');

    if (!confirmPasswordControl) {
      return false;
    }

    return (
      this.registerForm.hasError('passwordMismatch') &&
      (confirmPasswordControl.touched || confirmPasswordControl.dirty)
    );
  }

  ngOnInit(): void {
    this.navbarService.isVisible = true;

    this.initializeForm();
  }

  openTermsConditionModal() {
    this.modalService.show(TermsConditionModalComponent, {
      class: 'modal-lg',
    });
  }

  fC(formControlName: string): AbstractControl | null {
    return this.registerForm.get(formControlName);
  }

  isPasswordRuleInvalid(errorName: string): boolean {
    const control = this.passwordControl;

    if (!control) {
      return false;
    }

    return !!control.errors?.[errorName] && (control.touched || control.dirty);
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.registerForm.markAsDirty();
      return;
    }

    this.isRegistering = true;
    this.registerErrorMessage = '';
    const { email, password } = this.registerForm.value;
    this.authDataService.register({ userName: email, password }).subscribe({
      next: () => {
        this.isRegistering = false;
        this.registerErrorMessage = '';
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isRegistering = false;
        console.log(error);
        this.registerErrorMessage = error?.error || 'Registration failed. Please try again.';
      },
    });
  }

  private initializeForm(): void {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', passwordValidators],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: passwordsMatchValidator('password', 'confirmPassword'),
      }
    );
  }
}
