import { CommentAuthor } from "./comment-author";

export interface Comment {
  author: CommentAuthor,
  body:string,
  likes:number
}
