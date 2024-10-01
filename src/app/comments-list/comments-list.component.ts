import { Component } from '@angular/core';
import {CommentAuthor} from "../models/comment-author";
import { Comment } from "../models/comment";
import {CommentItemComponent} from "../comment-item/comment-item.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [
    CommentItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {
  personList: CommentAuthor[] = //any[] would have worked as well
    [{firstName: "John", lastName:"Doe", nickname: "Johnathan",
      profileImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/La_Promenade%2C_by_Pierre-Auguste_Renoir.jpg/800px-La_Promenade%2C_by_Pierre-Auguste_Renoir.jpg",
      emailAddress:"johndoe@yahoo.net"},
      {firstName: "Jane", lastName:"Doe", nickname: "D0m1nat0r",
        profileImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Olivia_de_Havilland%2C_actress%2C_1985_-_levels_adjustment.jpg/800px-Olivia_de_Havilland%2C_actress%2C_1985_-_levels_adjustment.jpg",
        emailAddress:"pdoe123@gmail.com"},
      {firstName: "Patrick", lastName:"Star", nickname: "Patrick",
        profileImageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/800px-Patrick_Star.svg.png",
        phoneNumber: "+12345678910", emailAddress:"pstar@gmail.com"},
      {firstName: "Man", lastName:"In Yellow Hat", nickname: "Man in the yellow hat",
        profileImageURL: "https://upload.wikimedia.org/wikipedia/en/d/d8/Curious_George.png",
        emailAddress:"yellowhat@zoo.com"},
      {firstName: "Grzegorz", lastName:"Wisniewski", nickname: "Cherry5431",
        profileImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/800px-Cherry_season_%2848216568227%29.jpg",
        emailAddress:"nirvana@gmail.com"},
      {firstName: "Alexander", lastName:"Bell", nickname: "Alexander Graham Bell",
        profileImageURL:"https://upload.wikimedia.org/wikipedia/commons/1/10/Alexander_Graham_Bell.jpg",
        phoneNumber: "+1", emailAddress:"alexanderbell@arpa.net"}];
  commentArray:Comment[] = [{author: this.personList[0], body:"Hi", likes:0},
    {author: this.personList[1], body:"Howdy", likes:0},
    {author: this.personList[2], body:"I'm Patrick", likes:1},
    {author: this.personList[3], body:"I like George", likes:3},
    {author: this.personList[4], body:"Hello World", likes:0},
    {author: this.personList[5], body:"Greetings Gentlemen", likes:0}];


}
