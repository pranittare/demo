import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PageEvent } from '@angular/material';

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
 totalPosts = 0;
 postsPerPage = 2;
 currentPage = 1;
 pageSizeOptions = [1 ,2, 5, 10]
 private postsSub: Subscription
  
  constructor(public postsService: PostsService) { }

  ngOnInit() {
 this.isLoading = true;

   this.postsService.getPosts(this.postsPerPage, this.currentPage);

   this.postsSub = this.postsService.getPostUpdateListener().subscribe((postData: {posts: Post[], postCount: number}) =>{
 this.isLoading = false;
 this.totalPosts = postData.postCount;

      this.posts = postData.posts;
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;

    console.log(pageData)
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize
    this.postsService.getPosts(this.postsPerPage, this.currentPage)
  }
  onDelete(postId: string) {
    this.isLoading = true;

    this.postsService.deletePost(postId).subscribe(() =>{
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
    });
  }

}