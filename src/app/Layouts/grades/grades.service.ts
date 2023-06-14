import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { grade } from "src/app/Components/grade-cards/grade.model";

@Injectable(
    {providedIn: 'root'}
)
export class GradesService {
    private baseUrl:string = "https://ecampus-app-3c691-default-rtdb.firebaseio.com/";
    private gradesEndPoint:string = "grades.json";

    constructor(private http:HttpClient) {

    }

    getLinks() {
        return this.http.get<grade []>(this.baseUrl + this.gradesEndPoint);
    }
}