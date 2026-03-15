import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-join-screen',
  standalone: false,
  templateUrl: './join-screen.component.html',
  styleUrl: './join-screen.component.scss',
})
export class JoinScreenComponent implements AfterViewInit {
  @ViewChild('qrCode') qrCodeElement: ElementRef<HTMLCanvasElement> | undefined;

  @Output() startQuizEvent = new EventEmitter();

  ngAfterViewInit(): void {
    if (this.qrCodeElement) {
      QRCode.toCanvas(this.qrCodeElement.nativeElement, '12123123123123123', {
        width: 140,
        margin: 1,
      });
    }
  }

  startQuiz() {
    this.startQuizEvent.emit();
  }
}
