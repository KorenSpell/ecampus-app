import { Component } from '@angular/core';
import { message } from 'src/app/Components/message-cards/message.model';
import { mock_messages } from 'src/app/Components/message-cards/mock-messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  messages: message[] = [];

  constructor() {
    for(var messaged of mock_messages) {
      this.messages.push(new message(messaged));
    }
  }
}
