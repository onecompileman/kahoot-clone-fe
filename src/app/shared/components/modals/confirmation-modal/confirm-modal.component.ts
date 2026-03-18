import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  standalone: false,
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class ConfirmModalComponent {
  message: string = '';
  isConfirming: boolean = false;
  confirmCallbackObservable: Observable<void> | null = null;

  constructor(public modalRef: BsModalRef) {}

  confirm(): void {
    if (this.confirmCallbackObservable) {
      this.isConfirming = true;
      this.confirmCallbackObservable.subscribe({
        next: () => {
          this.isConfirming = false;
          this.modalRef.hide();
        },
        error: () => {
          this.isConfirming = false;
          this.modalRef.hide();
        },
      });
    } else {
      this.modalRef.hide();
    }
  }
}
