import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TermsConditionModalComponent } from './components/modals/terms-condition-modal/terms-condition-modal.component';
import { ConfirmModalComponent } from './components/modals/confirmation-modal/confirm-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [CommonModule, BsDropdownModule, ModalModule],
  declarations: [NavbarComponent, SidebarComponent, TermsConditionModalComponent, ConfirmModalComponent],
  exports: [NavbarComponent, SidebarComponent, ModalModule, BsDropdownModule, TermsConditionModalComponent, ConfirmModalComponent],
  providers: [],
})
export class SharedModule {
}
