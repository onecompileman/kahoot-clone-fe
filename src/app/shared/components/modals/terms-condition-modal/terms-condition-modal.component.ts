import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-terms-condition-modal',
  standalone: false,
  templateUrl: './terms-condition-modal.component.html',
  styleUrl: './terms-condition-modal.component.scss'
})
export class TermsConditionModalComponent {
  constructor(
    public modalRef: BsModalRef,
  ) { }
}
