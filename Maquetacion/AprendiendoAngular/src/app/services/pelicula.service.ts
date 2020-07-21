import { Injectable} from "@angular/core";
import { Pelicula} from "../models/pelicula";

@Injectable()
  export class PeliculaService{
    public peliculas: Pelicula[];

    constructor() {
      this.peliculas = [
        new Pelicula("spiderman 4",2020,"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAoyQcob4-9ltFU6iY2zxurKl78GrUcPNc2w&usqp=CAU"),
        new Pelicula("los vengadores",2021,"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAoyQcob4-9ltFU6iY2zxurKl78GrUcPNc2w&usqp=CAU"),
        new Pelicula("sherk",2022,"https://img1.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg"),
        new Pelicula("sherk",2023,"https://steamcdn-a.akamaihd.net/steam/apps/997070/header.jpg?t=1593186554"),

      ];
    }
    holaMundo(){
      return "hola mundo desde un servicio de angular";
    }

    getPeliculas(){
      return this.peliculas;
    }
  }
