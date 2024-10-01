import { Component } from '@angular/core';
import {CommentAuthor} from "../models/comment-author";
import { Comment } from "../models/comment";
import {CommentItemComponent} from "../comment-item/comment-item.component";

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [
    CommentItemComponent
  ],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {


}
