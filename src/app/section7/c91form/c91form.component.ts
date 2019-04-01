import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-c91form',
  templateUrl: './c91form.component.html',
  styleUrls: ['./c91form.component.css']
})
export class C91formComponent implements OnInit {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace //custom validator
      ], UsernameValidators.shouldBeUnique), //custom async validator
      password: new FormControl('', Validators.required)
    })
  }); 

  get username(){
    return this.form.get('account.username');
  }

  login(){ //imitating a invalid login
    this.form.setErrors({
      invalidlogin: true
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
