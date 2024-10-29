import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommentService} from "../services/comment.service";
import {Comment} from "../models/comment";
import {AuthorService} from "../services/author.service";
import {CommentsListComponent} from "../comments-list/comments-list.component";
import {CommentAuthor} from "../models/comment-author";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  commentForm: FormGroup;
  authorsArray: CommentAuthor[] = [];
  emptyCommentAuthor:CommentAuthor = {id: 0, firstName: '',lastName:'', nickname:'',emailAddress:''};

  isUpdate:boolean = false;

  public constructor(private formBuilder:FormBuilder,
                     private commentService:CommentService,
                     private route:ActivatedRoute,
                     private authorService:AuthorService,
                     private router: Router) {

    this.commentForm = this.formBuilder.group({
      id: [commentService.generateNewId()],
      author: [this.emptyCommentAuthor, Validators.required],
      body: ['', Validators.required],
      likes: [0, Validators.required],
    });

  }

  ngOnInit() {
    this.authorService.getAuthors().subscribe({
      next: (data: CommentAuthor[]) => this.authorsArray = data,
      error: err => console.error("UH OH! Error fetching Comments!", err),
      complete: () => console.log("Comments fetched!")
    });

      const id = Number(this.route.snapshot.paramMap.get('id'));

      if (id) {
        this.isUpdate = true
        this.commentService.getCommentById(id).subscribe({
          next: comment => {
            if (comment) {
              this.commentForm.patchValue(comment);
            }
          },
          error: err => {
            console.error('Error fetching comment:', err);
          }
        });}
  }

  onSubmit() {
    if (this.commentForm.valid && this.isUpdate) {
      const newComment:Comment = this.commentForm.value;
      this.commentService.updateComment(newComment).subscribe(() => this.router.navigate(["/comments"]));
    } else if (this.commentForm.valid) {
      const newComment:Comment = this.commentForm.value;
      this.commentService.addComment(newComment).subscribe(() => this.router.navigate(["/comments"]));
    }

  }

  navigateToCommentsList() {

  }
}
