import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  imports: [FaceSnapComponent],
  selector: 'app-face-snap-list',
  styleUrl: './face-snap-list.component.scss',
  templateUrl: './face-snap-list.component.html',
})
export class FaceSnapListComponent implements OnInit {

faceSnaps!: FaceSnap[];

constructor(private faceSnapsService: FaceSnapsService) { }
  
ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();

  }

}
