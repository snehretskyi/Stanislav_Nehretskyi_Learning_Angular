import {CommentAuthor} from "../models/comment-author";
import {Comment} from "../models/comment";

const personList: CommentAuthor[] = //any[] would have worked as well
  [{firstName: "John", lastName:"Doe", nickname: "Johnathan",
    profileImageURL: "assets/800px-La_Promenade,_by_Pierre-Auguste_Renoir.jpg",
    emailAddress:"johndoe@yahoo.net"},
    {firstName: "Jane", lastName:"Doe", nickname: "D0m1nat0r",
      profileImageURL: "assets/Olivia_de_Havilland,_actress,_1985_-_levels_adjustment.jpg",
      emailAddress:"pdoe123@gmail.com"},
    {firstName: "Patrick", lastName:"Star", nickname: "Patrick",
      profileImageURL: "assets/Patrick_Star.svg.webp",
      phoneNumber: "+12345678910", emailAddress:"pstar@gmail.com"},
    {firstName: "Man", lastName:"In Yellow Hat", nickname: "Man in the yellow hat",
      profileImageURL: "assets/Curious_George.png",
      emailAddress:"yellowhat@zoo.com"},
    {firstName: "Grzegorz", lastName:"Wisniewski", nickname: "Cherry5431",
      profileImageURL: "assets/Cherry_season_(48216568227).jpg",
      emailAddress:"nirvana@gmail.com"},
    {firstName: "Alexander", lastName:"Bell", nickname: "Alexander Graham Bell",
      profileImageURL:"assets/Alexander_Graham_Bell.jpg",
      phoneNumber: "+1", emailAddress:"alexanderbell@arpa.net"}];
export const commentArray:Comment[] = [{id: 1, author: personList[0], body:"Hi", likes:0},
  {id: 2, author: personList[1], body:"Howdy", likes:0},
  {id: 3, author: personList[2], body:"Hello", likes:0},
  {id: 4, author: personList[3], body:"I like George", likes:3},
  {id: 5, author: personList[4], body:"Hello World", likes:0},
  {id: 6, author: personList[5], body:"Greetings Gentlemen", likes:0}];
