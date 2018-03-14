import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../core/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(
      {
      username: 'ericpolman',
      password: 'secret',
      remember: true}
    ).subscribe(() => {
      this.router.navigate(['/overview']);
    });
  }
}
