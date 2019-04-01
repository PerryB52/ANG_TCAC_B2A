import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s4-assignment2',
  templateUrl: './s4-assignment2.component.html',
  styleUrls: ['./s4-assignment2.component.css']
})
export class S4Assignment2Component implements OnInit {

  isFavorite = true;

  changeFavorite(){
    if(this.isFavorite)
      this.isFavorite = false;
    else
      this.isFavorite = true;
    
    console.log("value is: ", this.isFavorite);
  }

  constructor() { }

  ngOnInit() {
  }

}
