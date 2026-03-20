import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.scss',
})
export class ItemCertificado {

  id: string = '6';

  // Injeção de dependência: Isso permite navegar entre rotas
  constructor(private router: Router) {}

  // Router → responsável por navegação entre páginas
  redirecionaCertificado(){
  this.router.navigate(['/certificados', 2]) //  rota -- /certificados/2
  // this.router.navigateByUrl("certificados" + this.id) //  rota -- /certificados/2

}

}
