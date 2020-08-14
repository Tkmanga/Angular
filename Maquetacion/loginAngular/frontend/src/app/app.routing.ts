// importar los modulos
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//importar los componentes

import {TaskComponent} from "./components/task/task.component";
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";
import {PrivateTaskComponent} from "./components/private-task/private-task.component";
import {HomeComponent} from "./components/home/home.component";
import {ErrorComponent} from "./components/error/error.component";
//array de rutas

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'task', component: TaskComponent },
  {path: 'task/private', component: PrivateTaskComponent },
  {path: '**', component: ErrorComponent }

];
//exportar el modulo de routas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
