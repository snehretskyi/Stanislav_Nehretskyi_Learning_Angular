import {Component, Input} from '@angular/core';
import {MatDialogContent} from "@angular/material/dialog";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-error-dialog',
  standalone: true,
    imports: [
        MatDialogContent,
        NgIf
    ],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.css'
})
export class ErrorDialogComponent {
    @Input() error?:String;
}
