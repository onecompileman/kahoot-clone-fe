import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PublicNavbarService } from '../../../core/services/public-navbar.service';
import { GameState } from '../../../shared/enums/game-state.enum';

// @ts-ignore
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-game-screen',
  standalone: false,
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.scss'
})
export class GameScreenComponent implements OnInit, AfterViewInit {

  gameState: GameState = GameState.SHOWING_SCORES;

  GameState = GameState; // Expose enum to template

  constructor(
    private publicNavbarService: PublicNavbarService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.publicNavbarService.isVisible = false;
    });

    if (this.gameState === GameState.SHOWING_SCORES) {
      this.triggerConfetti();
    }
  }

  private triggerConfetti(): void {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

}
