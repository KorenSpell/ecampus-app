import { Component } from '@angular/core';
import { message } from 'src/app/Components/message-cards/message.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {

  constructor(private ms: MessagesService) {}

  AddMessage(message: message) {
    console.log("New Message Added");
    console.log(message);
    this.ms.addLinks(message);
  }
}


