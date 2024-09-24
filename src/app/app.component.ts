import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentAuthor } from "./models/comment-author";
import {NgForOf, NgIf} from "@angular/common";
import {CommentsListComponent} from "./comments-list/comments-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CommentsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Personal Data';
}
