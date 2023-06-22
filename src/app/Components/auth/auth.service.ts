import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public constructor(private http: HttpClient) { }

    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signEndPoint: string = "signUp";
    logEndoint: string = "signInWithPassword";

    public signup(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signEndPoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }

    public login(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.logEndoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }
}