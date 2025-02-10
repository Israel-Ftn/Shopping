import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  saldo = 0;

  depositar() {
    const valor = prompt('Digite um Valor Para Depósito');
    if (valor !== null) {
      this.saldo += parseFloat(valor);
    }
  }
  debitar(){
    const valor=prompt('Digite o valor de Débito:');
    if(valor !== null){
      if(this.saldo >= parseFloat(valor)){
        this.saldo-=parseFloat(valor)
      }else{
        alert('saldo Insuficiente')
      }
    }
  }
  comprarProdutos(preco:number) {
    if(this.saldo>= preco){
     this.saldo-= preco;
     alert('Voce comprou o produto com sucesso  SALDO ATUAL ' + this.saldo)
    }else{
      alert('Saldo Insuficiente deposite Dinheiro para Poder Adquirir o Item')
    }
  }
}
