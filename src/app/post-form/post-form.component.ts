import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<any>();
  @Output() onRemovePost = new EventEmitter<any>();
  @Output() onToggle = new EventEmitter<any>();

  constructor() { }

  onSubmit(form): void {
    this.submitted.emit(form);
  }

  removePost(index: number): void {
    this.onRemovePost.emit(index);
  }

  toggle(): void {
    this.onToggle.emit();
  }

  ngOnInit() {
  }

}
