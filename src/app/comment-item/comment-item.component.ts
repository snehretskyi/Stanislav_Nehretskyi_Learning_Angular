import {Component, Input} from '@angular/core';
import {Comment} from "../models/comment";

@Component({
  selector: 'app-comment-item',
  standalone: true,
  imports: [],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.css'
})
export class CommentItemComponent {
  @Input() contentItem?: Comment;
}
