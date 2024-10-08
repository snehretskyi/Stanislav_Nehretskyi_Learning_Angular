import {Component, Input} from '@angular/core';
import {Comment} from "../models/comment";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, RouterLinkActive} from "@angular/router";
import {CommentService} from "../services/comment.service";

@Component({
  selector: 'app-comment-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLinkActive
  ],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.css'
})
export class CommentItemComponent {
  @Input() comment: Comment | undefined;

  constructor(private route: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.commentService.getCommentById(Number(id)).subscribe(comment =>{
        this.comment = comment;
      })
    }
  }
}
