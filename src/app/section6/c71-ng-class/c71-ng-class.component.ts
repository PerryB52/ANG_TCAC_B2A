import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c71-ng-class',
  templateUrl: './c71-ng-class.component.html',
  styleUrls: ['./c71-ng-class.component.css']
})
export class C71NgClassComponent implements OnInit {

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
