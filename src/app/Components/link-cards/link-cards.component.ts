import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-cards',
  templateUrl: './link-cards.component.html',
  styleUrls: ['./link-cards.component.css']
})

export class LinkCardsComponent {

  @Input()
  link! : string;
  @Input()
  text! : string;


}
