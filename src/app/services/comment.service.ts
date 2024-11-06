import { Injectable } from '@angular/core';
import { commentArray } from "../data/mock-content"
import {catchError, Observable, of, throwError} from "rxjs";
import { Comment } from "../models/comment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'api/commentArray';
  private comments:Comment[] = commentArray;

  constructor(private http: HttpClient) { }


  getComments():Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getCommentById(commentId: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiUrl}/${commentId}`).pipe(catchError(this.handleError));
  }

  addComment(newComment: Comment) : Observable<Comment>{
    newComment.id = this.generateNewId();
    return this.http.post<Comment>(this.apiUrl, newComment).pipe(catchError(this.handleError));
  }

  updateComment(updatedComment: Comment): Observable<Comment | undefined> {
    return this.http.put<Comment>(`${this.apiUrl}/${updatedComment.id}`, updatedComment).pipe(catchError(this.handleError));
  }

  deleteComment(commentId: number): Observable<Comment> {
    return this.http.delete<Comment>(`${this.apiUrl}/${commentId}`).pipe(catchError(this.handleError));
  }

  generateNewId() {
    return this.comments.length > 0 ? Math.max(...this.comments.map(comment => comment.id)) + 1 : 1;
  }

  handleError(error: HttpErrorResponse) {
    console.error("API error! :-(")
    return throwError(() => {Error(error.message || "Server Error")});
  }

}
