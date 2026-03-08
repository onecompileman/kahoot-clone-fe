import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  standalone: false,
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent implements OnInit {
  
  public isMobile: boolean = false;

  private readonly mobileWidth = 992;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = innerWidth <= this.mobileWidth;
  }

  ngOnInit(): void {
    this.isMobile = innerWidth <= this.mobileWidth;
  }
}
