import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [
    UpperCasePipe,
  ],
  selector: 'app-face-snap',
  standalone: true,
  styleUrl: './face-snap.component.scss',
  templateUrl: './face-snap.component.html',
})
export class FaceSnapComponent{

  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) { }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}

