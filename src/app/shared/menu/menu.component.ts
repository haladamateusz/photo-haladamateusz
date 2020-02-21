import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private isAuthenticated: boolean;
  // isLoggedIn: any;
  user = this.authService.user;
  constructor(
    private authService: AuthService,
    private router: Router
    //           private router: Router
  ) {

  }

  ngOnInit() {
    this.isLoggedIn();
  }

  upload() {
    this.router.navigate(['/upload']);
  }

  isLoggedIn() {
    this.isAuthenticated = this.authService.isLoggedIn();
    return this.isAuthenticated;
  }

  logOut() {
    this.authService.logout();
    this.user = null;
  }

  // ngOnInit() {
  //   this.isLoggedIn = this.authService.isLoggedIn();
  // }
  //
  // logout() {
  //   this.authService.logout()
  //     .then(() => this.router.navigate(['/login']));
  // }
}
