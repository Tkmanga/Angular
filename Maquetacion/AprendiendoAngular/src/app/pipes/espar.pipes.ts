import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'esPar'
})

export class EsParPipes implements PipeTransform{

  transform(value: any){
    var esPar = " no es par";
    if(value %2 == 0 ){
      esPar = " es par";
    }
    return "El año" + esPar;
  }
}
