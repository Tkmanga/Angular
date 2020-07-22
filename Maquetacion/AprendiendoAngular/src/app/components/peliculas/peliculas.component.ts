import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService} from "../../services/pelicula.service";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})

//OnInit es un hook

export class PeliculasComponent implements OnInit, DoCheck {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService

  ) {
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date (2020, 8,12);
  }

  ngOnInit(): void {
    console.log(this._peliculaService.holaMundo())
  }
  //el metodo doche se ejecuta cada vez que hay un cambio en el componente
  ngOnDestroy() {
    console.log('el componente se va eliminar')
  }
  ngDoCheck() {
    console.log('DoCheck Lanzado ');
  }

  cambiarTitulo (){
    this.titulo = "El titulo ah sido cambiado";
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
