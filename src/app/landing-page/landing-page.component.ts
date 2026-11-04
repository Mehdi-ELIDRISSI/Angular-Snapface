import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-landing-page',
  styleUrl: './landing-page.component.scss',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {

  constructor(private router: Router) { }

    onContinue() {
      this.router.navigateByUrl('facesnaps');
    }

}
