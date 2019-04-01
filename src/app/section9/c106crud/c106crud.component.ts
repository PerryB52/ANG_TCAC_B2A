import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';

@Component({
  selector: 'app-c106crud',
  templateUrl: './c106crud.component.html',
  styleUrls: ['./c106crud.component.css']
})
export class C106crudComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) { }

  ngOnInit(){
    this.service.getAll()
      .subscribe(posts => this.posts = posts);

      console.log("1Posts array is: ");
      console.log(this.posts);
  }
  
  //refactored using optimistic update approach 
  createPost(input: HTMLInputElement){
    let post: any = { title: input.value }
    this.posts.splice(0, 0, post); //update ui before server call

    input.value = '';

    this.service.create(JSON.stringify(post))
      .subscribe(newPost => {
        post.id = newPost.id;
        //console.log(response.json());
      }, (error: AppError) => {
        this.posts.splice(0, 1); //rollback ui if server call fails.
        if(error instanceof BadInput){
          alert('400 error example.');
          console.log(error);
          //this.form.setErrors(error.originalError) // example for a form
        }
        else throw error; //rethrown so it can be handled by global error handler
      });
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
    //this.http.put(this.url, post); //patch is used to only update some fields instead of the entire object
  }

  deletePost(post){
    this.service.delete(post.id) //post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          //console.log(response.json())
      }, (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has already been deleted.')
          
        else throw error; //rethrown so it can be handled by global error handler
      });
  }
  

}
