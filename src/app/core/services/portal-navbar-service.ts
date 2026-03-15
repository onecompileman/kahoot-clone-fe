import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PortalNavbarService {
    isVisibleNavbar: boolean = true;
    isVisibleSidebar: boolean = true;
}