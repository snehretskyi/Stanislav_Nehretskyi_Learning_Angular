import {CommentAuthor} from "../models/comment-author";
import {Comment} from "../models/comment";

const personList: CommentAuthor[] = //any[] would have worked as well
  [{firstName: "John", lastName:"Doe", nickname: "Johnathan", emailAddress:"johndoe@yahoo.net"},
    {firstName: "Jane", lastName:"Doe", nickname: "D0m1nat0r", emailAddress:"pdoe123@gmail.com"},
    {firstName: "Patrick", lastName:"Star", nickname: "Patrick", phoneNumber: "+12345678910", emailAddress:"pstar@gmail.com"},
    {firstName: "Man", lastName:"In Yellow Hat", nickname: "Man in the yellow hat", emailAddress:"yellowhat@zoo.com"},
    {firstName: "Grzegorz", lastName:"Wisniewski", nickname: "Cherry5431", emailAddress:"nirvana@gmail.com"},
    {firstName: "Alexander", lastName:"Bell", nickname: "Alexander Graham Bell", phoneNumber: "+1", emailAddress:"alexanderbell@arpa.net"}];
export const commentArray:Comment[] = [{author: personList[0], body:"Hi", likes:0},
  {author: personList[1], body:"Howdy", likes:0},
  {author: personList[2], body:"Hello", likes:0},
  {author: personList[3], body:"I like George", likes:3},
  {author: personList[4], body:"Hello World", likes:0},
  {author: personList[5], body:"Greetings Gentlemen", likes:0}];
