import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { PWFormValidators } from './pwform.validators'

@Component({
  selector: 'app-s8assignment7changepw',
  templateUrl: './s8assignment7changepw.component.html',
  styleUrls: ['./s8assignment7changepw.component.css']
})
export class S8assignment7changepwComponent {

  form = new FormGroup({
    oldpassword: new FormControl('',
      Validators.required,
      PWFormValidators.checkPassword
    ),
    newpassword: new FormControl('',
      Validators.required
    ),
    confpassword: new FormControl('', [
      Validators.required,
      PWFormValidators.passwordMismatch
    ])
  });

  get oldpassword(){
    return this.form.get('oldpassword');
  }

  get newpassword(){
    return this.form.get('newpassword');
  }

  get confpassword(){
    return this.form.get('confpassword');
  }
  
}
