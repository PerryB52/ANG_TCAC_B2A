import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-c102formbuilder',
  templateUrl: './c102formbuilder.component.html',
  styleUrls: ['./c102formbuilder.component.css']
})
export class C102formbuilderComponent {

  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

}
