import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-face-snap',
  standalone: true,
  styleUrl: './face-snap.component.scss',
  templateUrl: './face-snap.component.html',
})
export class FaceSnap implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  userHasSnapped!:boolean;
  snapButtonText!: string;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Mon premier FaceSnap';
    this.description = 'Un snap de mon premier jour à l\'école';
    this.createdAt = new Date();
    this.snaps = 0;
    this.userHasSnapped = false;
    this.snapButtonText = 'Snap';
    this.imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByOjmpd3SNSK01yQAKI_d0Cii3X-4D1E1vDWA-rz0pQ&s=10';
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
      this.snaps--;
      this.userHasSnapped = false;
      this.snapButtonText = 'Snap';
    }
  }

  Snap() : void {
    if(!this.userHasSnapped) {
      this.snaps++;
      this.userHasSnapped = true;
      this.snapButtonText = 'Déjà Snap';
    }
  }


}

