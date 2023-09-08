import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'halims-admin';
  isMenuVisible: any;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const currentRoute = event.url;
        console.log('Current route:', currentRoute);
        if (currentRoute == '/sign-in' || currentRoute == '/') {
          this.isMenuVisible = false
        } else {
          this.isMenuVisible = true;
        }
      });
  }
}
