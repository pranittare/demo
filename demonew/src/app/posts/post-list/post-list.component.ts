import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is post one\'s content'},
  //   {title: 'Second Post', content: 'This is post Second content'},
  //   {title: 'Third Post', content: 'This is post third\'s content'},

  // ]
 posts: Post[] = [];
 isLoading = false;
 private postsSub: Subscription
  
  constructor(public postsService: PostsService) { }

  ngOnInit() {
 this.isLoading = true;

   this.postsService.getPosts();

   this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) =>{
 this.isLoading = false;

      this.posts = posts;
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

}
