import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = 'Stanislav';
  animalOfTheDay:string = "Rhesus Macaque";
  number:number = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
  date:string = "2024-09-09"
}
