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
export class Navbar  {
}
