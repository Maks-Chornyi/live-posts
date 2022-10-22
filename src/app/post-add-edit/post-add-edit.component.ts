import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../post.model";
import {PostService} from "../post.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.css']
})
export class PostAddEditComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,) { }
    private postIndex: number = 0;
    public editMode: boolean = false;

  ngOnInit(): void {
    let title: string = '';
    let description: string = '';
    let imagePath: string = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        this.editMode = true;
        this.postIndex = params['index'];
        const post: Post = this.postService.getPostByIndex(this.postIndex);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
      }
    });
    this.form = new FormGroup({
        title: new FormControl(title,[Validators.required, Validators.maxLength(10)]),
        description: new FormControl(description, [Validators.required]),
        imagePath: new FormControl(imagePath, [Validators.required])
      }
    );
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    const post: Post = new Post (title, description, imagePath, 'maks@maks.com', new Date(),0);

    if (this.editMode) {
      this.postService.editPost(this.postIndex, post);
    } else {
      this.postService.addPost(post);
    }

    //navigate to post list
    this.router.navigate(['/post-list']).then(r => console.log(r));
  }
}
