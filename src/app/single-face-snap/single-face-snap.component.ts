import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  selector: 'app-single-face-snap',
  standalone: true,
  styleUrl: './single-face-snap.component.scss',
  templateUrl: './single-face-snap.component.html',
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  userHasSnapped!:boolean;
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.userHasSnapped = false;
      this.snapButtonText = 'Snap';
  }

  Snap() : void {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.userHasSnapped = true;
      this.snapButtonText = 'Déjà Snap';
  }

  private prepareInterface() {
    this.userHasSnapped = false;
    this.snapButtonText = 'Snap';
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

}

