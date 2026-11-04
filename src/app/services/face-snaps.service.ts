import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
      new FaceSnap(
          'Les Champs Elysées',
          'Une photo des Champs Elysées, à Paris durant mes déplacements professionnels',
          'https://www.franceguide.info/fr/wp-content/uploads/sites/20/paris-champs-elysees-arc-triomphe.jpg',
          new Date(),
          10
      ).withLocation('Champs Elysées, Paris'),

      new FaceSnap(
          'Je suis en cours, je suis concentré',
          'Un snap en cours, interdit mais bon...',
          'https://miro.medium.com/v2/resize:fit:2560/1*e3QNunAwa1Z9ZrGVvQkVIA.jpeg',
          new Date(),
          100
      ).withLocation('Polytech Tours'),

      new FaceSnap(
            'En plein repas, je mange un sandwich',
            'Un snap dans le restaurant, j\'ai faim !',
            'https://www.doitinparis.com/files/2025/bars-and-restos/club-sandwichs/08content/club-sandwich-les-deux-magots-paris.jpg',
            new Date(),
            250
      )
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find((faceSnap : FaceSnap) => faceSnap.id === faceSnapId);
        if(!foundFaceSnap) {
            throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
    }

}