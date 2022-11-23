import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateName } from '../custom-validators/name.validator';
import { ValidateNumber } from '../custom-validators/number.validator';
import { ValidateEmail } from '../custom-validators/email.validator';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
})
export class ContactformComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      customerName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      customerMobileNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      customerEmail: new FormControl(null, [
        Validators.required,
        ValidateEmail,
      ]),
      customerCountry: new FormControl(null, [
        Validators.required,
        ValidateName,
      ]),
      customerMessage: new FormControl(null),
    });
  }
  onSubmit() {
    this.contactService
      .postContactForm(this.contactForm.value)
      .subscribe((result) => {
        console.log(result);
      });
    this.contactForm.reset();
  }
  showCustomerNameErrors() {
    const customerName = this.contactForm.get('customerName');
    if (customerName && customerName.touched && customerName.invalid) {
      if (
        customerName &&
        customerName.errors &&
        customerName.errors['required']
      )
        return 'Name is required';
      if (
        customerName &&
        customerName.errors &&
        customerName.errors['minlength']
      )
        return 'Name should of length 3';
      if (
        customerName &&
        customerName.errors &&
        customerName.errors['invalidUrl']
      )
        return 'Name should not contain numbers';
    }

    return null;
  }
  showCustomerMobileNumberErrors() {
    const customerMobileNumber = this.contactForm.get('customerMobileNumber');
    if (
      customerMobileNumber &&
      customerMobileNumber.touched &&
      customerMobileNumber.invalid
    ) {
      if (
        customerMobileNumber &&
        customerMobileNumber.errors &&
        customerMobileNumber.errors['required']
      )
        return 'Mobile Number is required';
      if (
        customerMobileNumber &&
        customerMobileNumber.errors &&
        customerMobileNumber.errors['minlength']
      )
        return 'Mobile Number should be of length 10';
      if (
        customerMobileNumber &&
        customerMobileNumber.errors &&
        customerMobileNumber.errors['inValidMobileNumber']
      )
        return 'Mobile number should contain numbers only';
    }

    return null;
  }
  showCustomerEmailErrors() {
    const customerEmail = this.contactForm.get('customerEmail');
    if (customerEmail && customerEmail.touched && customerEmail.invalid) {
      if (
        customerEmail &&
        customerEmail.errors &&
        customerEmail.errors['required']
      )
        return 'Email is required';
      if (
        customerEmail &&
        customerEmail.errors &&
        customerEmail.errors['isEmail']
      )
        return 'Enter valid email';
    }
    return null;
  }
  showCustomerCountryErrors() {
    const customerCountry = this.contactForm.get('customerCountry');
    if (customerCountry && customerCountry.touched && customerCountry.invalid) {
      if (
        customerCountry &&
        customerCountry.errors &&
        customerCountry.errors['required']
      )
        return 'Country is required';
      if (
        customerCountry &&
        customerCountry.errors &&
        customerCountry.errors['minlength']
      )
        return 'Country name should be of minimum length 3';
      if (
        customerCountry &&
        customerCountry.errors &&
        customerCountry.errors['invalidUrl']
      )
        return 'Country name should not contain numbers';
    }

    return null;
  }
  isFormValid() {
    if (this.contactForm.valid) {
      return false;
    }
    return true;
  }
}
