import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c48two-way-binding',
  templateUrl: './c48two-way-binding.component.html',
  styleUrls: ['./c48two-way-binding.component.css']
})
export class C48twoWayBindingComponent implements OnInit {

  email = "me@example.com"

  onKeyUp(){
    console.log(this.email);
  }

  constructor() { }

  ngOnInit() {
  }

}
