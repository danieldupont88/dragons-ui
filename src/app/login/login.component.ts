import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSuccess: boolean;
  username: string;
  password: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
  ) { }

  onLogin(username, password) {
    this.loginService.authenticate(this.username, this.password).subscribe(success => this.loginSuccess = success);
    this.router.navigate(['dragons']);
  }

  onLogoff() {
    this.loginService.logoff();
  }

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['dragons']);
    }
  }

}
