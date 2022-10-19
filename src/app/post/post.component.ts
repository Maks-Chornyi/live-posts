import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post?: Post;
  @Input() index?: number;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log(this.post);
  }

  onDelete() {
    this.postService.deletePostByIndex(this.index);
  }
}
