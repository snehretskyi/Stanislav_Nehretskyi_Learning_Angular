import {Component, Input} from '@angular/core';
import {Comment} from "../models/comment";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {CommentService} from "../services/comment.service";
import {CommentsListComponent} from "../comments-list/comments-list.component";

@Component({
  selector: 'app-comment-item',
  standalone: true,
    imports: [
        NgIf,
        NgOptimizedImage,
        RouterLinkActive,
        RouterLink
    ],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.css'
})
export class CommentItemComponent {
  @Input() comment: Comment | undefined;

  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private router:Router,
              private commentsList:CommentsListComponent) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.commentService.getCommentById(Number(id)).subscribe(comment =>{
        this.comment = comment;
      })
    }
  }

  onDelete() {
    if (this.comment) {
      this.commentService.deleteComment(this.comment.id).subscribe(() => this.router.navigate(["/comments"]));

      // refreshing the page on deletion
      this.commentsList.ngOnInit();
    }
  }
}
