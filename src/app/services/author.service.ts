import { Injectable } from '@angular/core';
import {Comment} from "../models/comment";
import {commentArray, personList} from "../data/mock-content";
import {CommentAuthor} from "../models/comment-author";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authors:CommentAuthor[] = personList;

  constructor() { }

  getAuthors():Observable<CommentAuthor[]> {
    return of(personList);
  }

}
