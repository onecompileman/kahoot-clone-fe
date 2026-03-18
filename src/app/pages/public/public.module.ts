import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { PortalRoutingModule } from './public-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FooterComponent } from './game-screen/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    JoinGameComponent,
    GameScreenComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
