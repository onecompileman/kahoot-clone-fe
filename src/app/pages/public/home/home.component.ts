import { Component, OnInit } from '@angular/core';
import { PublicNavbarService } from '../../../core/services/public-navbar.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private navbarService: PublicNavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.isVisible = true;
  }

}
