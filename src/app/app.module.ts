import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
