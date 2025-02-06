import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  Resposta: string = '';
   
  

  Logar() {
    let email: string = (<HTMLInputElement>document.getElementById('email'))
      .value;
    let Senha = (<HTMLInputElement>document.getElementById('Senha')).value;

    if (email == '') {
      this.Resposta = 'Digite  um Email válido';
    } else if (Senha == '') {
      this.Resposta = ' Digite uma senha Válida';
    } else {
      this.Resposta = 'BEM VINDO DE VOLTA ' + '' + email;
    }
  }
}
