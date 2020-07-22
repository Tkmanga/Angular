import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user: any;
  public title : string;
  public campo : string;

  constructor() {
    this.title = "Formulario";
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.user)
  }
  hasDadoClick(){
    alert('asd');
  }

  hasSalido() {
    alert('le diste a enter')
  }
}
