import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Global} from "../../services/global";

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})

export class ArticleNewComponent implements OnInit {
  public titlee: string;
  public article: Article;
  public estado: string;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:Global.url+'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
    ) {
    this.titlee = 'Crear Articulo'
    this.article = new Article('','','',null,null)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.article = response.article;
          this.estado = 'success';
          this._router.navigate(['/blog']);

        }else {
          this.estado = 'error en la respuesta';
          console.log(this.estado);
        }
      },
      error => {
        this.estado = "error";
       console.log(this.estado);
      }
    );
  }

  imageUplo(data){
    let image_data = JSON.parse(data.body.image);
    this.article = image_data;
  }
}
