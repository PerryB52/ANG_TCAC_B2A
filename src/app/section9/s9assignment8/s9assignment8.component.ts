import { Component, OnInit } from '@angular/core';
import { AssignServService } from './../c106crud/assign-serv.service';

@Component({
  selector: 'app-s9assignment8',
  templateUrl: './s9assignment8.component.html',
  styleUrls: ['./s9assignment8.component.css']
})
export class S9assignment8Component implements OnInit {

  posts2: any[];

  constructor(private service: AssignServService) { }

  ngOnInit(){
    this.service.getAll()
      .subscribe(posts => this.posts2 = posts);
    
    console.log("2Posts array is: ");
    console.log(this.posts2);
  }
}
