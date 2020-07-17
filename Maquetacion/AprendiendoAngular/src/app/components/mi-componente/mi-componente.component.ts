import {Component} from "@angular/core";
@Component({
  selector: 'mi-componente',
  templateUrl:'./mi-componente.component.html'
})
export class MiComponente{
  public titulo: string;
  public comentario: string;
  public year: number;

  constructor() {
    this.titulo = "Hola mundo, soy mi componente";
    this.comentario = "Este es mi primer comentario ";
    this.year = 2020;

    console.log('mi componente cargado');
  }


}
