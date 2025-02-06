import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperandoComponent } from './recuperando/recuperando.component';

export const routes: Routes = [
    {path:'login', title:"logando", component:LoginComponent},
    {path:'RecuperacaoSenha', title:'RecSenha', component:RecuperandoComponent}
];
