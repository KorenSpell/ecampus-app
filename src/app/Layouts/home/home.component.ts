import { Component } from '@angular/core';
import { link } from 'src/app/Components/link-cards/link.model';
import { mock_links } from 'src/app/Components/link-cards/mock-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  links:link[] = [];

  constructor() {
    for(var linked of mock_links) {
      this.links.push(new link(linked));
    }
  }
}
