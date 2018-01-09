import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginView = false;
  loginForm: FormGroup;
  emailErrorMessage: string;
  passwordErrorMessage: string;

  path: string;

  constructor(private routes: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('leaveManager@gmail.com', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50)
        ]
      }),
      password: new FormControl('aaaaaa', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(50)]})
    });
  }

  emailValidation(control: AbstractControl) {
    if (control.errors === null) {
      return null;
    } else {
      if (control.errors.required === true) {
        return this.emailErrorMessage = 'Email is required';
      }
      if ((control.value.length < 6) || (control.value.length > 50)) {
        return this.emailErrorMessage = 'Email length between 6 to 50';
      }
    }
  }

  passwordValidation(control: AbstractControl) {
    if (control.errors === null) {
      return null;
    } else {
      if (control.errors.required === true) {
        return this.passwordErrorMessage = 'Password is required';
      }
      if ((control.value.length < 6) || (control.value.length > 50)) {
        return this.passwordErrorMessage = 'Password length between 6 to 50';
      }
    }
  }

  onSubmitLoginForm(formValue, valid) {
    if (valid === true) {
      if (this.path === 'admin') {
        if (formValue.email === 'leaveManager@gmail.com' && formValue.password === 'aaaaaa') {
          sessionStorage.setItem('Authorization', 'employee');
          this.routes.navigate(['adminDashboard']);
        } else {
          this.toastr.error('Username or Password is not correct!');
        }
      }

      if (this.path === 'employee') {
        if (formValue.email === 'employee@gmail.com' && formValue.password === 'aaaaaa') {
          sessionStorage.setItem('Authorization', 'employee');
          this.routes.navigate(['dashboard']);
        } else {
          this.toastr.error('Username or Password is not correct!');
        }
      }

    }
  }

  onClickLogin(path) {
    this.loginView = true;
    this.path = path;
  }

  onClickBack() {
    this.loginView = false;
  }

}
