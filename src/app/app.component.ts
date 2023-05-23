import { Component } from '@angular/core';
import { link } from './Components/link-cards/link.model';
import { mock_links } from './Components/link-cards/mock-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecampus-app';

  links:link[] = [];

  constructor() {
    for(var linked of mock_links) {
      this.links.push(new link(linked));
    }
  }
}
