import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s6assignment5zippy',
  templateUrl: './s6assignment5zippy.component.html',
  styleUrls: ['./s6assignment5zippy.component.css']
})
export class S6assignment5zippyComponent implements OnInit {

  @Input('title') title: string;
  isExpanded: boolean;

  toggle(){
    this.isExpanded = !this.isExpanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
