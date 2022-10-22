import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {PostService} from "../post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post?: Post;
  @Input() index?: number;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.post);
  }

  onDelete() {
    this.postService.deletePostByIndex(this.index);
  }

  onEdit() {
    this.router.navigate(['/post-edit', this.index]).then((res) => console.log(res));
  }
}
