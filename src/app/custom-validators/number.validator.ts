import { AbstractControl } from '@angular/forms';

export function ValidateNumber(control: AbstractControl) {
  const isAlpha = (str: string): boolean => /^[A-Z]+$/i.test(str);
  let name = control.value;
  if (isAlpha(name)) {
    if (name) {
      return { inValidMobileNumber: true };
    }
  }

  //   for (let i = 0; i < name.length; i++) {
  //     const character = name.charAt(i);
  //     console.log(i, character);
  //     if (name) {
  //       return { invalidUrl: true };
  //     }
  //   }
  return null;
}
