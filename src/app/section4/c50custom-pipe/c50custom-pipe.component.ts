import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c50custom-pipe',
  templateUrl: './c50custom-pipe.component.html',
  styleUrls: ['./c50custom-pipe.component.css']
})
export class C50customPipeComponent implements OnInit {
  
  text = `
  Lorem Impsum is simply dummy text of the printing and very very long text bla bla
  `

  constructor() { }

  ngOnInit() {
  }

}
