import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginobj: Login;

  constructor(private http: HttpClient) {
    this.loginobj = new Login();
  }
  onLogin() {
    debugger;
    this.http.get<any>(
      'https://localhost:7061/user/login',
      {
        params: {
          Email: this.loginobj.Email,
          Password: this.loginobj.Password
        }
      }
    )
    .subscribe(
      response => {
        console.log('Login successful', response);
      },
      error => {
        console.error('Error occurred while logging in:', error);
      }
    );
  }
  
}
export class Login {
  public Email: string;
  public Password: string;

  constructor() {
    this.Email = '';
    this.Password = '';
  }
 
}
