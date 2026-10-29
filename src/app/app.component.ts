import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  
  faceSnaps!: FaceSnap[];
  
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
          'Mon premier FaceSnap',
          'Un snap de mon premier jour à l\'école. Ma tête à ce moment :',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByOjmpd3SNSK01yQAKI_d0Cii3X-4D1E1vDWA-rz0pQ&s=10',
          new Date(),
          10
      ),

      new FaceSnap(
          'Je suis en cours, je suis concentré',
          'Un snap en cours, interdit mais bon...',
          'https://miro.medium.com/v2/resize:fit:2560/1*e3QNunAwa1Z9ZrGVvQkVIA.jpeg',
          new Date(),
          100
      ),

      new FaceSnap(
              'En plein repas, je mange un sandwich',
              'Un snap dans le restaurant, j\'ai faim !',
              'https://www.doitinparis.com/files/2025/bars-and-restos/club-sandwichs/08content/club-sandwich-les-deux-magots-paris.jpg',
              new Date(),
              250
      )
    ];


    this.faceSnaps[1].setLocation('Polytech Tours');

  }

}
