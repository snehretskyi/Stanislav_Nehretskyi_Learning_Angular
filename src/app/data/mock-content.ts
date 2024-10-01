import {CommentAuthor} from "../models/comment-author";
import {Comment} from "../models/comment";

const personList: CommentAuthor[] = //any[] would have worked as well
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
export const commentArray:Comment[] = [{id: 1, author: personList[0], body:"Hi", likes:0},
  {id: 2, author: personList[1], body:"Howdy", likes:0},
  {id: 3, author: personList[2], body:"Hello", likes:0},
  {id: 4, author: personList[3], body:"I like George", likes:3},
  {id: 5, author: personList[4], body:"Hello World", likes:0},
  {id: 6, author: personList[5], body:"Greetings Gentlemen", likes:0}];
