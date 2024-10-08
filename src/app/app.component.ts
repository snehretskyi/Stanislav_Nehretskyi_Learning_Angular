import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { CommentAuthor } from "./models/comment-author";
import {NgForOf, NgIf} from "@angular/common";
import {CommentsListComponent} from "./comments-list/comments-list.component";
import {CommentItemComponent} from "./comment-item/comment-item.component";
import {CommentService} from "./services/comment.service";
import {Comment} from "./models/comment";
import {commentArray} from "./data/mock-content";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CommentsListComponent, CommentItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Personal Data';

  constructor(private commentService:CommentService) {
  }

  ngOnInit() {
  }
}
