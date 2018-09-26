import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  authToken: string;

  constructor(private loginService: LoginService) { }

  onLogin() {
    this.loginService.authenticate(this.username, this.password).subscribe(token => this.authToken = token);
  }

  ngOnInit() {
  }

}
