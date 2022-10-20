import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../post.model";
import {PostService} from "../post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.css']
})
export class PostAddEditComponent implements OnInit {

  form!: FormGroup;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
        title: new FormControl(null,[Validators.required, Validators.maxLength(10)]),
        description: new FormControl(null, [Validators.required]),
        imagePath: new FormControl(null, [Validators.required])
      }
    );
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    //ready with object
    const post: Post = new Post (title, description, imagePath, 'maks@maks.com', new Date());

    this.postService.addPost(post);

    //navigate to post list
    this.router.navigate(['/post-list']).then(r => console.log(r));
  }
}
