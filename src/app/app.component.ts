import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentAuthor } from "./models/comment-author";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Personal Data';
  personList: CommentAuthor[] = //any[] would have worked as well
    [{firstName: "John", lastName:"Doe", nickname: "Johnathan", emailAddress:"johndoe@yahoo.net"},
      {firstName: "Jane", lastName:"Doe", nickname: "D0m1nat0r", emailAddress:"pdoe123@gmail.com"},
      {firstName: "Patrick", lastName:"Star", nickname: "Patrick", phoneNumber: "+12345678910", emailAddress:"pstar@gmail.com"},
      {firstName: "Man", lastName:"In Yellow Hat", nickname: "Man in the yellow hat", emailAddress:"yellowhat@zoo.com"},
      {firstName: "Grzegorz", lastName:"Wisniewski", nickname: "Cherry5431", emailAddress:"nirvana@gmail.com"},
      {firstName: "Alexander", lastName:"Bell", nickname: "Alexander Graham Bell", phoneNumber: "+1", emailAddress:"alexanderbell@arpa.net"}
]}
