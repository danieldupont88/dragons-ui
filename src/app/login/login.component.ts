import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: boolean;
  username: string;
  password: string;
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
  ) { }

  onLogin(username, password) {
    this.loginService.authenticate(this.username, this.password)
    .subscribe( success => this.loginError = !success);
    this.router.navigate(['dragons']);
  }

  onLogoff() {
    this.loginService.logoff();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.loginError = false;
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['dragons']);
    }
  }

}
