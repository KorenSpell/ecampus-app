import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { message } from "src/app/Components/message-cards/message.model";

@Injectable(
    {providedIn: 'root'}
)
export class MessagesService {
    private baseUrl:string = "https://ecampus-app-3c691-default-rtdb.firebaseio.com/";
    private messagesEndPoint:string = "messages.json";

    constructor(private http:HttpClient) {

    }

    getLinks() {
        return this.http.get<message []>(this.baseUrl + this.messagesEndPoint);
    }
}