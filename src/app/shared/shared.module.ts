import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TermsConditionModalComponent } from './components/modals/terms-condition-modal/terms-condition-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [CommonModule, BsDropdownModule, ModalModule],
  declarations: [NavbarComponent, SidebarComponent, TermsConditionModalComponent],
  exports: [NavbarComponent, SidebarComponent, ModalModule, BsDropdownModule, TermsConditionModalComponent],
  providers: [],
})
export class SharedModule {
}
