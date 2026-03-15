  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { AppRoutingModule } from './app-routing.module';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { AppComponent } from './app.component';
  import { CoreModule } from './core/core.module';
  import { BrowserModule } from '@angular/platform-browser';
  import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';

  @NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      FontAwesomeModule,
      CoreModule,
      SharedModule,
      ModalModule.forRoot()
    ]
  })
  export class AppModule { }
