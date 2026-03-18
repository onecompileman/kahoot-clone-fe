import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss',
  standalone: false,
})
export class QuestionFormComponent implements OnInit, OnDestroy {
  isMobile: boolean = false;
  isConfigOpen: boolean = true;
  private readonly mobileWidth = 992;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.syncResponsiveState();
  }

  ngOnInit(): void {
    this.syncResponsiveState();
  }

  ngOnDestroy(): void {
  }

  toggleConfigPanel(): void {
    this.isConfigOpen = !this.isConfigOpen;
  }

  private syncResponsiveState(): void {
    this.isMobile = innerWidth <= this.mobileWidth;

    if (!this.isMobile) {
      this.isConfigOpen = true;
    } else {
      this.isConfigOpen = false;
    }
  }
}
