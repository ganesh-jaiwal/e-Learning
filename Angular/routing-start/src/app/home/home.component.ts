import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginStatus = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginStatus = this.authService.loggedIn;
  }

  onServerLoad() {
    this.router.navigate(['/servers']);
  }
  onLogedin() {
    this.authService.login();
    this.loginStatus = this.authService.loggedIn;
  }
  onLogedout() {
    this.authService.logout();
    this.loginStatus = this.authService.loggedIn;
  }

}
