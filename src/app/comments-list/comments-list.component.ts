import {Component, inject} from '@angular/core';
import {CommentAuthor} from "../models/comment-author";
import { Comment } from "../models/comment";
import {CommentItemComponent} from "../comment-item/comment-item.component";
import {CommentService} from "../services/comment.service";
import {CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormComponent} from "../form/form.component";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialog, MatDialogContent} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [
    CommentItemComponent,
    NgForOf,
    NgClass,
    RouterLink,
    FormComponent,
    NgIf,
    DatePipe,
    CurrencyPipe,
    HoverHighlightDirective,
    MatDividerModule,
    MatCardModule,
    MatBottomSheetModule,
    MatDialogContent,
    ErrorDialogComponent,
    MatIconModule
  ],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {
  commentArray:Comment[] = [];
  readonly dialog = inject(MatDialog);
  constructor(private commentService:CommentService) {
  }

  commentId:number = 6;
  error?:string;

  prizeForWinner:number = 100;

  selectedComment: Comment | undefined;


  ngOnInit() {
    this.commentService.getComments().subscribe({
      next: (data: Comment[]) => this.commentArray = data,
      error:err => {
        this.error = "error!"
        let dialogRef = this.dialog.open(ErrorDialogComponent, {
          height: '400px',
          width: '600px',
        });
      },
      complete:() => {
        console.log("Comments fetched!")
      }
    });


    this.commentService.getCommentById(this.commentId).subscribe(comment => this.selectedComment = comment);
  }

  selectComment (comment:Comment):void {
    this.selectedComment = comment;
  }
}
