import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-s3-assignment1',
  templateUrl: './s3-assignment1.component.html',
  styleUrls: ['./s3-assignment1.component.css']
})
export class S3Assignment1Component implements OnInit {

  authors;

  constructor(authors: AuthorsService) {
    this.authors = authors.getAuthors();
   }

  ngOnInit() {
  }

}
