import { Component } from '@angular/core';
//decorator
@Component({
  //etiqueta
  selector: 'app-root',
  //vista
  templateUrl: './app.component.html',
  //le indico hojas de estilo unica para este componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
}

