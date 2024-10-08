import { Component } from '@angular/core';
import {CommentAuthor} from "../models/comment-author";
import { Comment } from "../models/comment";
import {CommentItemComponent} from "../comment-item/comment-item.component";
import {CommentService} from "../services/comment.service";
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [
    CommentItemComponent,
    NgForOf,
    NgClass,
    RouterLink
  ],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {
  commentArray:Comment[] = [];
  constructor(private commentService:CommentService) {
  }

  commentId:number = 6;

  selectedComment: Comment | undefined;


  ngOnInit() {
    this.commentService.getComments().subscribe({
      next: (data: Comment[]) => this.commentArray = data,
      error:err => console.error("UH OH! Error fetching Comments!", err),
      complete:() => console.log("Comments fetched!")
    });


    this.commentService.getCommentById(this.commentId).subscribe(comment => this.selectedComment = comment);
  }

  selectComment (comment:Comment):void {
    this.selectedComment = comment;
  }
}
