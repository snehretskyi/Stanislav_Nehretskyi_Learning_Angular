import { Injectable } from '@angular/core';
import {Comment} from "../models/comment";
import {commentArray, personList} from "../data/mock-content";
import {CommentAuthor} from "../models/comment-author";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'api/personList';

  private authors:CommentAuthor[] = personList;

  constructor(private http: HttpClient) { }

  getAuthors():Observable<CommentAuthor[]> {
    return this.http.get<CommentAuthor[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error("API error! :-(")
    return throwError(() => {Error(error.message || "Server Error")});
  }

}
