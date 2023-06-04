import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-cards',
  templateUrl: './message-cards.component.html',
  styleUrls: ['./message-cards.component.css']
})
export class MessageCardsComponent {

  @Input()
  light! : string;
  @Input()
  dark! : string;

}
