import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { link } from "src/app/Components/link-cards/link.model";

@Injectable(
    {providedIn: 'root'}
)
export class LinksService {

    constructor(private db: AngularFireDatabase) {}

    getLinks() {
        return this.db.list<link>("links").valueChanges();
    }
}