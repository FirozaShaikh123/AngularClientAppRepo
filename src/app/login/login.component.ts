import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[FormsModule,CommonModule ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    debugger
    if (this.username === 'aa' && this.password === 'a') {
      this.loginError = false;
      // Navigate to dashboard or home page
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
}
