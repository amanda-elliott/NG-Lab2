import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Posts } from "../posts";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Posts[];

  constructor() { }

  ngOnInit() {
  }

}
