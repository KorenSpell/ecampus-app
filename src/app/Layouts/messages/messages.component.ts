import { Component, OnInit } from '@angular/core';
import { message } from 'src/app/Components/message-cards/message.model';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: message[] = [];

  constructor(private messagesService:MessagesService) {}

  ngOnInit(): void {
    this.messagesService.getLinks().subscribe((data:message []) => {
      console.log("Fetching messages");
      for(var messaged of data) {
        this.messages.push(new message(messaged));
      }
    });
  }
}
