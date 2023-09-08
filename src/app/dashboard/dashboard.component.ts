import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.userService.getReservations().subscribe(
      (response: any) => {
        const res = response;
        console.log('response', res);
      }, (error: any) => {
        console.log('error', error);

      }
    )

    this.userService.getOrders().subscribe(
      (response: any) => {
        const res = response;
        console.log('response', res);
      }, (error: any) => {
        console.log('error', error);

      }
    )

    this.userService.getUsers().subscribe(
      (response: any) => {
        const res = response;
        console.log('response', res);
      }, (error: any) => {
        console.log('error', error);

      }
    )
  }

}
