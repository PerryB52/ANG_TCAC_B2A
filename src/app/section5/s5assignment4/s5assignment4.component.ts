import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s5assignment4',
  templateUrl: './s5assignment4.component.html',
  styleUrls: ['./s5assignment4.component.css']
})
export class S5assignment4Component implements OnInit {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  @Output('click') click = new EventEmitter();

  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;

    this.click.emit({newValue: this.isActive});
  }

  constructor() { }

  ngOnInit() {
  }

}
