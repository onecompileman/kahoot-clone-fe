import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Route, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  hideNavItems: boolean = false;
  private subscriptions: any = {};

  constructor(
    private router: Router,
  ) {}

  ngOnDestroy(): void {
    Object.keys(this.subscriptions).forEach((sub) => {
      this.subscriptions[sub].unsubscribe();
    });
  }

  ngOnInit(): void {
    this.checkRouteUrlAndHideNavItems();
    this.listenToRouteChanges();
  }


  private listenToRouteChanges() {
    this.subscriptions['routeEventSub'] = this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRouteUrlAndHideNavItems();
      });
  }

  private checkRouteUrlAndHideNavItems() {
    const routesToHideNavItems = ['login', 'register', 'join-game'];
    this.hideNavItems = routesToHideNavItems.some(
      (route) => route.trim().length > 0 && this.router.url.includes(route)
    );
  }
}
