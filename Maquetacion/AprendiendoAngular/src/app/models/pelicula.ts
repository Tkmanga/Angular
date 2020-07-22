export class Pelicula {
  /*
  public title: string;
  public year: number;
  public image: string;

  constructor(title, year, image){
    this.title = title;
    this.image = image;
    this.year = year;
  }

   */

  //esto define la propiedad y lo procesa automaticamente
  constructor(
    public title: string,
    public year: number,
    public image: string
  ) {
  }
}

