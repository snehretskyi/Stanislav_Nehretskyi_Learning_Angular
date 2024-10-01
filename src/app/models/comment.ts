import { CommentAuthor } from "./comment-author";

export interface Comment {
  id:number,
  author: CommentAuthor,
  body:string,
  likes:number
}
