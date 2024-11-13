import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import {PreloadAllModules} from "@angular/router";
import { AppComponent } from './app/app.component';
import {CommentsListComponent} from "./app/comments-list/comments-list.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";

const routes: Routes = [
  {path:'', redirectTo: '/comments', pathMatch: 'full'}, //default route
  { path: 'comments', component: CommentsListComponent },
  { path: 'modify-comment/:id', loadComponent: () => import('./app/modify-comment/modify-comment.component').then(m => m.ModifyCommentComponent) },
  {path:'modify-comment', loadComponent: () => import('./app/modify-comment/modify-comment.component').then(m => m.ModifyCommentComponent)},
  {path: '**', loadComponent:() => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}//Wildcard route for a 404 page
];

// I changed delay because 1000ms is too slow
bootstrapApplication(AppComponent, {providers: [ provideHttpClient(), provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }))
    ]})
  .catch((err) => console.error(err));
