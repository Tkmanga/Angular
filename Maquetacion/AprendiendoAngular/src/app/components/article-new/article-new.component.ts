import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Global} from "../../services/global";
import swal from "sweetalert";

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})

export class ArticleNewComponent implements OnInit {
  public page_title: string;
  public article: Article;
  public estado: string;
  public is_edit: boolean;
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
    this.page_title = 'Crear Articulo'
    this.article = new Article('','','',null,null)
    this.is_edit = false;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.article = response.article;
          this.estado = 'success';
          //alerta
          swal({text:'Articulo creado correctamente!', icon: 'success'}
          );
          this._router.navigate(['/blog']);

        }else {
          this.estado = 'error en la respuesta';
          swal({text:'Fallo al crear!', icon: 'error'}
          );
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
    this.article.image = data.body.image;
  }
}
