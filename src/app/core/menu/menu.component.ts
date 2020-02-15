import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  // isLoggedIn: any;

  constructor(
    // private authService: AuthService,
    //           private router: Router
  ) {

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
