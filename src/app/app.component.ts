import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  isLoggedIn = false;
  username = '';

  updateLoggedIn() {
    const userStr = localStorage.getItem('user') || '';
    if (userStr) {
      const user = JSON.parse(userStr);
      console.log(user);
      this.username=user.email;
      if (user) {
        this.isLoggedIn = true;
      }
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.updateLoggedIn();
  }

}