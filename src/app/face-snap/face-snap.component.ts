import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  imports: [
    NgStyle,
    NgClass
  ],
  selector: 'app-face-snap',
  standalone: true,
  styleUrl: './face-snap.component.scss',
  templateUrl: './face-snap.component.html',
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  userHasSnapped!:boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.userHasSnapped = false;
    this.snapButtonText = 'Snap';
  }

  onSnap() : void {
    if(this.userHasSnapped) {
      this.unSnap();
    } 
    else {
      this.Snap();
    }
  }

  unSnap() : void {
    if(this.userHasSnapped) {
      this.faceSnap.removeSnap();
      this.userHasSnapped = false;
      this.snapButtonText = 'Snap';
    }
  }

  Snap() : void {
    if(!this.userHasSnapped) {
      this.faceSnap.addSnap();
      this.userHasSnapped = true;
      this.snapButtonText = 'Déjà Snap';
    }
  }


}

