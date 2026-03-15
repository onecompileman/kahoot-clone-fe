import { Component, OnInit } from '@angular/core';
import { TermsConditionModalComponent } from '../../../shared/components/modals/terms-condition-modal/terms-condition-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PublicNavbarService } from '../../../core/services/public-navbar.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(
    private modalService: BsModalService,
    private navbarService: PublicNavbarService
  ) {}
  ngOnInit(): void {
    this.navbarService.isVisible = true;
  }

  openTermsConditionModal() {
    this.modalService.show(TermsConditionModalComponent, {
      class: 'modal-lg',
    });
  }
}
