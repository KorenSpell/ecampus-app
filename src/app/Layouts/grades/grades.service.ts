import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { grade } from "src/app/Components/grade-cards/grade.model";

@Injectable(
    {providedIn: 'root'}
)
export class GradesService {

    constructor(private db: AngularFireDatabase) {

    }

    getLinks() {
        return this.db.list<grade>("grades").valueChanges();
    }
}