import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {CommentItemComponent} from "./app/comment-item/comment-item.component";
import {CommentsListComponent} from "./app/comments-list/comments-list.component";
import {ModifyCommentComponent} from "./app/modify-comment/modify-comment.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo: '/comments', pathMatch: 'full'}, //default route
  { path: 'comments', component: CommentsListComponent },
  { path: 'comments/:id', component: CommentItemComponent },
  {path:'modify-comment', component: ModifyCommentComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
