import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  public buttonClicked!:string;
  private AuthObservable!:Observable<AuthResponse>;

  constructor(private authservice: AuthService) {}

  public onSubmit(data: NgForm) {

    if(this.buttonClicked == 'signup') {
      this.AuthObservable = this.authservice.signup(data.value.email, data.value.password);
    }
    if(this.buttonClicked == 'login') {
      this.AuthObservable = this.authservice.login(data.value.email, data.value.password);
    }
    
    this.AuthObservable.subscribe(
      (data:AuthResponse) => {
        console.log(data);
      },
      error => {
        console.log(error.error.error.message);
      }
    );

    data.resetForm();
  }
}
