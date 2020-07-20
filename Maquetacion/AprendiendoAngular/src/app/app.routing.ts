//importar los modules del routing de angular
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Importar componentes a los cuales les quiero hacer una pagina exclusiva

import { HomeComponent} from "./components/home/home.component";
import { BlogComponent} from "./components/blog/blog.component";
import { FormularioComponent} from "./components/formulario/formulario.component";
import { PaginaComponent} from "./components/pagina/pagina.component";
import { PeliculasComponent} from "./components/peliculas/peliculas.component";
import { ErrorComponent} from "./components/error/error.component";

//Array de rutas

const appRoutes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'blog',component: BlogComponent},
  {path: 'formulario',component: FormularioComponent},
  {path: 'pagina-de-pruebas',component: PaginaComponent},
  {path: 'pagina-de-pruebas/:nombre',component: PaginaComponent},
  {path: 'pagina-de-pruebas/:nombre/:apellido',component: PaginaComponent},
  {path: 'peliculas',component: PeliculasComponent},
  {path: '**',component: ErrorComponent}

  ]

// exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
