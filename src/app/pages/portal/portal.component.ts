import { Component, HostListener, OnInit } from '@angular/core';
import { PortalNavbarService } from '../../core/services/portal-navbar-service';

@Component({
  selector: 'app-portal',
  standalone: false,
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent implements OnInit {
  
  public isMobile: boolean = false;

  private readonly mobileWidth = 992;

  constructor(
    public portalNavbarService: PortalNavbarService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = innerWidth <= this.mobileWidth;
  }

  ngOnInit(): void {
    this.isMobile = innerWidth <= this.mobileWidth;
  }
}
