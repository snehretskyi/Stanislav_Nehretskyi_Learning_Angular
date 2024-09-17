import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from "./models/person";
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
  personList: Person[] = //any[] would have worked as well
    [{firstName: "John", lastName:"Doe", age: 100, emailAddress:"johndoe@yahoo.net"},
      {firstName: "Jane", lastName:"Doe", age: 3, emailAddress:"N/A"},
      {firstName: "Patrick", lastName:"Star", age: 20, phoneNumber: "+12345678910", emailAddress:"pstar@gmail.com"},
      {firstName: "Man", lastName:"In Yellow Hat", age: 45, emailAddress:"yellowhat@zoo.com"},
      {firstName: "Grzegorz", lastName:"Wisniewski", age: 23, emailAddress:"nirvana@gmail.com"},
      {firstName: "Alexander", lastName:"Bell", age: 324, phoneNumber: "+1", emailAddress:"N/A"}
]}
