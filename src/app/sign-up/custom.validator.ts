
import {ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';

export function creatDateRangeValidator(): ValidatorFn|null {
    return (form: AbstractControl): ValidationErrors |null => {

        const mail= form.get("mail")?.value;

        const repeatMail = form.get("repeatMail")?.value;

         return   (mail===repeatMail) ? null : {'mail':true};

        
    }
  }