import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperandoComponent } from './recuperando/recuperando.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'login', title:"logando", component:LoginComponent},
    {path:'RecuperacaoSenha', title:'RecSenha', component:RecuperandoComponent},
    {path:'PaginaInicial', title:'home', component:HomeComponent},
    {path:'nav', title:'Navegacao' , component:NavbarComponent} 
];
