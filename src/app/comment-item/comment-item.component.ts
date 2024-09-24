import {Component, Input} from '@angular/core';
import {Comment} from "../models/comment";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-comment-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.css'
})
export class CommentItemComponent {
  @Input() comment?: Comment;
}
