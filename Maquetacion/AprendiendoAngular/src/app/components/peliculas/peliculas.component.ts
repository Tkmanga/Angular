import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

//OnInit es un hook

export class PeliculasComponent implements OnInit, DoCheck {
  public titulo: string;

  constructor() {
    this.titulo = "Componente peliculas";
    console.log('constructor lanzado'); //esto seria lo primero q se ejecuta

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


}
