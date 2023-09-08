import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  public getReservations() {
    const URI = this.baseUrl + '/reservations';
    return this.http.get(URI).pipe(map(response => {
      return response;
    }));
  }

  public getOrders() {
    const URI = this.baseUrl + '/orders';
    return this.http.get(URI).pipe(map(response => {
      return response;
    }));
  }

  public getUsers() {
    const URI = this.baseUrl + '/users';
    return this.http.get(URI).pipe(map(response => {
      return response;
    }));
  }
}
