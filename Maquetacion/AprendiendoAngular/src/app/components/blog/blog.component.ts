import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = "Blog";
  }

  ngOnInit(): void {
  }

}
