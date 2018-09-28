import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
    ) {}
  
  ngOnInit() {
  }

  onLogoff() {
    this.loginService.logoff();
    this.router.navigate(['/login']);
  }

}
