import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-game',
  standalone: false,
  templateUrl: './join-game.component.html',
  styleUrl: './join-game.component.scss',
})
export class JoinGameComponent implements OnInit {
  isValidCode: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  joinGame() {
    this.router.navigate(['/game-screen']); 
  }
}
