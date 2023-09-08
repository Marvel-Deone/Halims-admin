import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public login(userData: any) {
    const URI = this.baseUrl + '/login';
    return this.http.post(URI, userData).pipe(map(response => {
      return response;
    }));
  }
}
