import {Injectable} from "@angular/core";
import {Post} from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService {
  private listOfPosts: Post[] = [
    new Post(
      'Nature',
      'Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.',
      'https://global-uploads.webflow.com/5df3d56e20b6d37f8de5e660/5e078aafed2a27217e6f09a2_memory-in-nature.jpg',
      'Maks',
      new Date()
    ),
    new Post(
      'Space',
      'Space is the boundless three-dimensional extent in which objects and events have relative position and direction.',
      'https://a.pinatafarm.com/960x640/00a5009d4e/james-webb-space-telescope.jpeg',
      'Maks',
      new Date()
    ),
    new Post(
      'Jappware',
      'Jappware provides high-quality IT Consulting & Software Development. Offers full-cycle development process from idea to release using top technologies and intelligent solutions. Our attention to detail and quality is unmatched in the IT industry.',
      'https://www.jappware.com/wp-content/uploads/2022/01/photo_2022-01-26-15.51.09-2.jpeg',
      'Maks',
      new Date()
    ),
  ];

  public getPostList(): Post[] {
    return this.listOfPosts;
  }

  public deletePostByIndex(index: number | undefined): void {
    //will remove one element from index 'index'
    if (typeof index === "number") {
      this.listOfPosts.splice(index, 1);
    }
  }

  public addPost(newPost: Post): void {
    this.listOfPosts.push(newPost);
  }

  public getPostByIndex(index: number): Post {
    return this.listOfPosts[index];
  }

  public editPost(index: number, post: Post): void {
    this.listOfPosts[index] = post;
  }
}
