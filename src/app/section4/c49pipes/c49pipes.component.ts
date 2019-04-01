import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c49pipes',
  templateUrl: './c49pipes.component.html',
  styleUrls: ['./c49pipes.component.css']
})
export class C49pipesComponent implements OnInit {

  course = {
    title: "The complete Angular course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }

  constructor() { }

  ngOnInit() {
  }

}
