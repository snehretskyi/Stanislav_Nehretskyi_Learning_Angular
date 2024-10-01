import { Injectable } from '@angular/core';
import { commentArray } from "../data/mock-content"
import {Observable, of} from "rxjs";
import { Comment } from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getComments():Observable<Comment[]> {
    return of(commentArray);
  }
}
