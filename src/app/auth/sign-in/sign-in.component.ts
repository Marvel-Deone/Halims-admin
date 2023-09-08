import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public loginForm?: any;
  loading: boolean = false;


  constructor(public auth: AuthService, private fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.loading = true;
    this.auth.login(this.loginForm.value).subscribe(
      (response: any) => {
        this.loading = false;
        console.log('response', response);

        this.router.navigate(['/dashboard']).then(() => { window.location.reload() });
      }, (errorResponse: any) => {
        this.loading = false;
        console.log('error', errorResponse);

      }
    )
  }

}
