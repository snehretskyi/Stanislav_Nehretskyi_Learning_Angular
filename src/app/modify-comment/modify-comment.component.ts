import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommentService} from "../services/comment.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modify-comment',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-comment.component.html',
  styleUrl: './modify-comment.component.css'
})
export class ModifyCommentComponent {
  commentForm: FormGroup;
  comment: Comment | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private router: Router
  ) {
    this.commentForm = this.fb.group({
      id: ['', Validators.required],
      body: [''],
      likes: [0]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.commentService.getCommentById(+id).subscribe((comment) => {
        if(comment) {
          this.comment = comment;

          this.commentForm.patchValue(comment);
        }
      });
    }
  }

  onSubmit(): void {
    const comment: Comment = this.commentForm.value;

    console.log(comment);

    if (comment.id) {
      this.commentService.updateComment(comment);
    } else {
      const newId = this.commentService.generateNewId();
      comment.id = newId;
      this.commentService.addComment(comment);
    }

    this.router.navigate(['/comments']);
  }

  onDelete(): void {
    const id = this.commentForm.get('id')?.value;
    if (id) {
      this.commentService.deleteComment(id);
      this.router.navigate(['/comments']);
    }
  }

  navigateToCommentsList(): void {
    this.router.navigate(['/comments']);
  }
}
