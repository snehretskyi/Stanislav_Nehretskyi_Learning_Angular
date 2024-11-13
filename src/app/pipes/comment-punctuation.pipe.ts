import { Pipe, PipeTransform } from '@angular/core';
import {Comment} from "../models/comment";

@Pipe({
  name: 'commentPunctuation',
  standalone: true
})
export class CommentPunctuationPipe implements PipeTransform {

  transform(commentBody:String): unknown {
    // makes first letter capital and adds a period at the end
    const firstLetter = commentBody.charAt(0);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const finalBody = capitalizedFirstLetter + commentBody.slice(1) + ".";
    return finalBody;
  }

}
