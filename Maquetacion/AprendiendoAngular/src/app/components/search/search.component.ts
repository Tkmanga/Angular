import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  public title: string;
  public articles : Article[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.title = "Articulos encontrados"
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      var search = params['search'];
      this._articleService.search(search).subscribe(
        response => {
          if(response.articles){
            this.articles = response.articles;

          }
        },
        error => {
          console.log(error)
          this.articles = [];
      }
      )
    })

  }

}
