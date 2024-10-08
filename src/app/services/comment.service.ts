import { Injectable } from '@angular/core';
import { commentArray } from "../data/mock-content"
import {Observable, of} from "rxjs";
import { Comment } from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments:Comment[] = commentArray;

  constructor() { }

  getComments():Observable<Comment[]> {
    return of(commentArray);
  }

  getCommentById(commentId: number): Observable<Comment | undefined> {
    const student = this.comments.find(comment => comment.id === commentId);
    return of(student);
  }

  addComment(newComment: Comment) : Observable<Comment[]>{
    this.comments.push(newComment)
    return of(this.comments);
  }

  updateComment(updatedComment: Comment): Observable<Comment[]> {
    const index = this.comments.findIndex(comment => comment.id === updatedComment.id);
    if (index !== -1) {
      this.comments[index] = updatedComment;
    }
    return of(this.comments);
  }

  deleteComment(commentId: number): Observable<Comment[]> {
    this.comments = this.comments.filter((comment) => comment.id !== commentId);
    return of(this.comments);
  }

}
