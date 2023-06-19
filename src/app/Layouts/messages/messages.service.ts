import { Injectable } from "@angular/core";
import { message } from "src/app/Components/message-cards/message.model";
import { AngularFireDatabase } from "@angular/fire/compat/database"

@Injectable(
    {providedIn: 'root'}
)
export class MessagesService {

    constructor(private db:AngularFireDatabase) {

    }

    getLinks() {
        return this.db.list<message>("messages").valueChanges();
    }

    addLinks( message: message) {
        this.db.list<message>("messages").push(message)
    }
}