import { Component } from '@angular/core';
import { PublicNavbarService } from '../../core/services/public-navbar.service';

@Component({
  selector: 'app-public',
  standalone: false,
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent {
  constructor(
    public publicNavbarService: PublicNavbarService
  ) {}
}
