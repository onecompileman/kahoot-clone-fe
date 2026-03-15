import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PortalNavbarService } from '../../../core/services/portal-navbar-service';

@Component({
  selector: 'app-start-quiz',
  standalone: false,
  templateUrl: './start-quiz.component.html',
  styleUrl: './start-quiz.component.scss',
})
export class StartQuizComponent implements AfterViewInit {
  constructor(private portalNavbarService: PortalNavbarService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.portalNavbarService.isVisibleNavbar = false;
      this.portalNavbarService.isVisibleSidebar = false;
    });
  }

  ngOnInit(): void {}
}
