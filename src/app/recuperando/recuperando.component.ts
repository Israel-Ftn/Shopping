import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperando',
  standalone: true,
  imports: [],
  templateUrl: './recuperando.component.html',
  styleUrl: './recuperando.component.css'
})
export class RecuperandoComponent {
  Resposta:string =''
envio() {
  let email = (<HTMLInputElement>document.getElementById('email')).value;
  if (email == ''){
   this.Resposta ='Digite um Email válido'
  }
  else{
    alert('um Email Foi Enviado Com Sucesso Para '+ email + ' Verifique Seu Span');
    window.location.href ='login'
    
  }
}
}


