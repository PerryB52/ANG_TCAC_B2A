import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c46event-filtering',
  templateUrl: './c46event-filtering.component.html',
  styleUrls: ['./c46event-filtering.component.css']
})
export class C46eventFilteringComponent implements OnInit {

  onKeyUp(){
    console.log("ENTER was pressed");
  }

  constructor() { }

  ngOnInit() {
  }

}
