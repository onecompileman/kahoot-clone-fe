import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TermsConditionModalComponent } from '../../../shared/components/modals/terms-condition-modal/terms-condition-modal.component';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private modalService: BsModalService
  ) {}


  openTermsConditionModal() {
    this.modalService.show(TermsConditionModalComponent, {
      class: 'modal-lg',
    });
  }
}
