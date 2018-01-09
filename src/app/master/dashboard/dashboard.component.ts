import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profileForm: FormGroup;

  firstNameErrorMessage: string;
  lastNameErrorMessage: string;
  mobileErrorMessage: string;
  emailErrorMessage: string;

  constructor() {
  }

  ngOnInit() {
    this.createProfileForm();
  }

  createProfileForm() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('Bhargav', Validators.required),
      lastName: new FormControl('Gopalka', Validators.required),
      email: new FormControl('gopalka@gmail.com', Validators.required),
      mobileNumber: new FormControl('9999888888', {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      })
    });
  }

  firstNameValidation(control: AbstractControl) {
    if (control.errors === null) {
      return null;
    } else {
      if (control.errors.required) {
        return this.firstNameErrorMessage = 'First name is required';
      }
    }
  }

  lastNameValidation(control: AbstractControl) {
    if (control.errors === null) {
      return null;
    } else {
      if (control.errors.required) {
        return this.lastNameErrorMessage = 'Last name is required';
      }
    }
  }

  mobileValidation(control: AbstractControl) {
    if (control.errors === null) {
      return null;
    } else {
      if (control.errors.required) {
        return this.mobileErrorMessage = 'Mobile Number is required';
      }
      if ((control.value.length < 10) || (control.value.length > 10)) {
        return this.mobileErrorMessage = 'Mobile Number must be of exact 10 digits long';
      }
    }
  }

  emailValidation(control: AbstractControl) {
    if (control.errors === null) {
      return null;
    } else {
      if (control.errors.required) {
        return this.emailErrorMessage = 'Email is required';
      }
    }
  }

  onCancelProfileForm() {
    this.createProfileForm();
  }

}
