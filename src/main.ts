import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {CommentItemComponent} from "./app/comment-item/comment-item.component";
import {CommentsListComponent} from "./app/comments-list/comments-list.component";
import {ModifyCommentComponent} from "./app/modify-comment/modify-comment.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";

const routes: Routes = [
  {path:'', redirectTo: '/comments', pathMatch: 'full'}, //default route
  { path: 'comments', component: CommentsListComponent },
  { path: 'modify-comment/:id', component: ModifyCommentComponent },
  {path:'modify-comment', component: ModifyCommentComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];

// I changed delay because 1000ms is too slow
bootstrapApplication(AppComponent, {providers: [ provideHttpClient(), provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }))]})
  .catch((err) => console.error(err));
