import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c40courses',
  templateUrl: './c40courses.component.html',
  styleUrls: ['./c40courses.component.css']
})
export class C40coursesComponent implements OnInit {

  title = "list of courses"
  imageUrl = "https://picsum.photos/400/200"

  constructor() { }

  ngOnInit() {
  }

}
