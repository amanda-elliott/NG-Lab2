import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Posts } from '../posts';

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
show: boolean = false;
// votes: number = 0;

  postList: Posts[] = [
    {
      header: "Dog",
      content: "woof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woofwoof woof",
      vote: 0
    },
    {
      header: "Cat",
      content: "meow meow",
      vote: 0
    },
    {
      header: "Pig",
      content: "oink oink",
      vote: 0
    },
    {
      header: "Cow",
      content: "moo moo",
      vote: 0
    },
    {
      header: "Whale",
      content: "mmyyyheeeelloooooo",
      vote: 0
    }
  ];

  constructor() { }

  onSubmit(form): void {
    this.postList.push({
      header: form.value.postTitle,
      content: form.value.thought,
      vote: null
    });
    this.toggle();
  }

  removePost (index: number): void {
    this.postList.splice(index, 1);
  }

  toggle(): void {
    this.show = !this.show;    
  }

  upVote(index: number) {
    this.postList[index].vote++;
  }  

  ngOnInit() {
  }

}

