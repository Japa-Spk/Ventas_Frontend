import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //variables
  public loginForm: FormGroup = this.formBuilder.group({});

  constructor(private router: Router, private formBuilder: FormBuilder, public authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // Simple Login
  login() {
    var user = { 
      'username': this.loginForm.value['email'], 
      'password': this.loginForm.value['password'] 
    }
    this.authService.getLogin(user);
  }
}
