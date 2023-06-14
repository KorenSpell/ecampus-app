import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { link } from "src/app/Components/link-cards/link.model";

@Injectable(
    {providedIn: 'root'}
)
export class LinksService {
    private baseUrl:string = "https://ecampus-app-3c691-default-rtdb.firebaseio.com/";
    private linksEndPoint:string = "links.json";

    constructor(private http:HttpClient) {

    }

    getLinks() {
        return this.http.get<link []>(this.baseUrl + this.linksEndPoint);
    }
}