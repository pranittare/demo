import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //    'This is the first post',
  //    'This is the Second post',
  //    'This is the Third post',
  // ]
  onClicked = false;
  posts: Post[] = [];
  index: number;
  private postSub: Subscription;
 
  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();

    this.postSub = this.postsService.getPostUpdateListner()
      .subscribe((posts: Post[]) =>{
        this.posts = posts;
      })
  }

  // onEdit(index) {
  //   console.log(index)
  //   this.postsService.getPost(index);
  // }
  doubleClick(index) {
    this.onClicked = !this.onClicked
    // console.log(this.onClicked)
    // this.onEdit(index);
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId)
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
