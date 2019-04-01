import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c47template-variables',
  templateUrl: './c47template-variables.component.html',
  styleUrls: ['./c47template-variables.component.css']
})
export class C47templateVariablesComponent implements OnInit {

  onKeyUp(email){
    console.log(email);
  }

  constructor() { }

  ngOnInit() {
  }

}
