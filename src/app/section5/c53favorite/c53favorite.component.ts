import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c53favorite',
  templateUrl: './c53favorite.component.html',
  styleUrls: ['./c53favorite.component.css']
  //,inputs:['isFavorite']
})
export class C53favoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isFavorite = !this.isFavorite;

    //send data to component that is subscribed to this event - in our cae container component
    this.click.emit({ newValue: this.isFavorite });
  }

  constructor() { }

  ngOnInit() {
  }

}
