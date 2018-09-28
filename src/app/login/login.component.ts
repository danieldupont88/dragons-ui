import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: boolean;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
  ) { }

  onLogin(username, password) {
    console.log(username, password);
    this.loginService.authenticate(username, password)
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
