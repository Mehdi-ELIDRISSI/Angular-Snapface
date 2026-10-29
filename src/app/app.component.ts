import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap.component';

@Component({
  imports: [FaceSnap],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {}
