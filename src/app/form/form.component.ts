import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommentService} from "../services/comment.service";

@Component({
  selector: 'app-form',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  commentForm: FormGroup;

  public constructor(private formBuilder:FormBuilder,
                     private commentService:CommentService) {

    this.commentForm = this.formBuilder.group({
      id: [commentService.generateNewId()],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickname: ['', Validators.required],
      email: ['', Validators.required],
      imageUrl: ['']
    });

  }

  onSubmit() {

  }

  onDelete() {

  }

  navigateToCommentsList() {

  }
}
