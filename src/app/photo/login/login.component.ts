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

  // login() {
  //   this.authService.login()
  //     .then(() => this.router.navigate(['/upload']))
  //     .catch(error => console.log(error.message));
  // }

  signInWithEmail() {
    this.authService.signInRegular(this.credentials)
      .then((res) => {
        console.log(res);

        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log('error: ' + err));
  }

}
