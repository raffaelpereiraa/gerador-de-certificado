// Component → define o componente
// OnInit → interface do ciclo de vida
// RouterLink → permite usar routerLink no HTML
// RouterLinkActive → controla classe ativa
// RouterModule → módulo geral de rotas

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule, NgClass, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {

  // método que o Angular executa automaticamente quando o componente é inicializado. Buscar dados (API), carregar informações iniciais, Ler parâmetros da rota
  ngOnInit(): void {
    // this significa: “este objeto aqui”, “chama a função mensagem que pertence a esse componente”
    this.mensagem();

  }

  // Só imprime no console
  mensagem() {
        console.log('O componente Navbar foi inicializado (dentro  de uma função).');
  } 


}
