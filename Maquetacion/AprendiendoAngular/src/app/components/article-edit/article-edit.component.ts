import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Global} from "../../services/global";
import swal from "sweetalert";

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public page_title: string;
  public article: Article;
  public estado: string;
  public is_edit: boolean;
  public url: string;
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
    this.page_title = 'Editar Articulo'
    this.article = new Article('','','',null,null)
    this.is_edit = true;
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit(){
    this._articleService.update(this.article._id , this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.article = response.article;
          this.estado = 'success';
          //alerta
          swal({text:'Articulo editado correctamente!', icon: 'success'});
          this._router.navigate(['/blog/articulo',this.article._id]);

        }else {
          this.estado = 'error en la respuesta';
          console.log(this.estado);
        }
      },
      error => {
        this.estado = "error";
        swal({text:'Edicion fallida!', icon: 'success'});
        console.log(this.estado);
      }
    );
  }

  imageUplo(data){
    this.article.image = data.body.image;
  }

  getArticle(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/']);
          }
        },
        error => {
          console.log(error)

          this._router.navigate(['/']);
        }
      )

    })
  }

}
