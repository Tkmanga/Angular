import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from "../../models/pelicula";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

//OnInit es un hook

export class PeliculasComponent implements OnInit, DoCheck {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;

  constructor() {
    this.titulo = "Componente peliculas";
    this.peliculas = [
      new Pelicula("spiderman 4",2020,"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAoyQcob4-9ltFU6iY2zxurKl78GrUcPNc2w&usqp=CAU"),
      new Pelicula("los vengadores",2021,"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAoyQcob4-9ltFU6iY2zxurKl78GrUcPNc2w&usqp=CAU"),
      new Pelicula("sherk",2022,"https://img1.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg"),
      new Pelicula("sherk",2023,"https://steamcdn-a.akamaihd.net/steam/apps/997070/header.jpg?t=1593186554"),
    ]

  }

  ngOnInit(): void {

    console.log('componente iniciado!!'); // despues de ejecuta esto
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
