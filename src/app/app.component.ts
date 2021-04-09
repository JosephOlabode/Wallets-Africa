import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wallets-Africa';
  menu = false;
  navbarOpen = true;
  notify = false;
  constructor() {
  }

  // tslint:disable-next-line:typedef
  toggleMenu() {
    this.menu = !this.menu;
  }
  // tslint:disable-next-line:typedef
  closeMenu() {
    this.menu = false;
  }
  // tslint:disable-next-line:typedef
  logOut() {
  }
  // tslint:disable-next-line:typedef
  toggleNotify() {
    this.notify = !this.notify;
  }
  // tslint:disable-next-line:typedef
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  // tslint:disable-next-line:typedef
  closeNavBar() {
    this.navbarOpen = false;
  }
}
