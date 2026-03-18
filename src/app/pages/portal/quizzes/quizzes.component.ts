import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PortalNavbarService } from '../../../core/services/portal-navbar-service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.scss',
  standalone: false
})
export class QuizzesComponent implements OnInit {

  constructor(
    private portalNavbarService: PortalNavbarService  
  ) { }

  ngOnInit(): void {
    this.portalNavbarService.isVisibleNavbar = true;
    this.portalNavbarService.isVisibleSidebar = true;
  }

}
