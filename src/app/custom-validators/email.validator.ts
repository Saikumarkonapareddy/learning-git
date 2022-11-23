import { AbstractControl } from '@angular/forms';

export function ValidateEmail(control: AbstractControl) {
  if (control.touched) {
    let email = control.value;
    var containChar = false;

    for (let i = 0; i < email.length; i++) {
      const character = email.charAt(i);
      if (character === '@') containChar = true;
    }
    if (!containChar) {
      return { isEmail: true };
    }
  }
  return null;
}
