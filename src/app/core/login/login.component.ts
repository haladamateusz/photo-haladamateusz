import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) {

  }

  login() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/upload']))
      .catch(error => console.log(error.message));
  }

}
