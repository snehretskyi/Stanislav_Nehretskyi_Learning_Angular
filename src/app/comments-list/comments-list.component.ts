import { Component } from '@angular/core';
import {CommentAuthor} from "../models/comment-author";
import { Comment } from "../models/comment";
import {CommentItemComponent} from "../comment-item/comment-item.component";

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [
    CommentItemComponent
  ],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {
  personList: CommentAuthor[] = //any[] would have worked as well
    [{firstName: "John", lastName:"Doe", nickname: "Johnathan", emailAddress:"johndoe@yahoo.net"},
      {firstName: "Jane", lastName:"Doe", nickname: "D0m1nat0r", emailAddress:"pdoe123@gmail.com"},
      {firstName: "Patrick", lastName:"Star", nickname: "Patrick", phoneNumber: "+12345678910", emailAddress:"pstar@gmail.com"},
      {firstName: "Man", lastName:"In Yellow Hat", nickname: "Man in the yellow hat", emailAddress:"yellowhat@zoo.com"},
      {firstName: "Grzegorz", lastName:"Wisniewski", nickname: "Cherry5431", emailAddress:"nirvana@gmail.com"},
      {firstName: "Alexander", lastName:"Bell", nickname: "Alexander Graham Bell", phoneNumber: "+1", emailAddress:"alexanderbell@arpa.net"}];
  commentArray:Comment[] = [{author: this.personList[0], body:"Hi", likes:0},
    {author: this.personList[1], body:"Howdy", likes:0},
    {author: this.personList[2], body:"Hello", likes:0},
    {author: this.personList[3], body:"I like George", likes:3},
    {author: this.personList[4], body:"Hello World", likes:0},
    {author: this.personList[5], body:"Greetings Gentlemen", likes:0}];


}
