import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c45event-binding',
  templateUrl: './c45event-binding.component.html',
  styleUrls: ['./c45event-binding.component.css']
})
export class C45eventBindingComponent implements OnInit {

  onSave($event){
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }

  onDivClick(){
    console.log("div was clicked");
  }

  constructor() { }

  ngOnInit() {
  }

}
