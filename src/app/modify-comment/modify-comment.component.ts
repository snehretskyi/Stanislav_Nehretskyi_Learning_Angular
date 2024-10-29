import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommentService} from "../services/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-modify-comment',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormComponent
  ],
  templateUrl: './modify-comment.component.html',
  styleUrl: './modify-comment.component.css'
})
export class ModifyCommentComponent {
}
