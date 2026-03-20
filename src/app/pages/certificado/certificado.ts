import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from "@angular/router";
import { CertificadoServices } from '../../_services/certificado.services';


@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.scss',
})

export class Certificado implements OnInit {

 constructor (private certificadoServices: CertificadoServices) {}

 ngOnInit(): void {
   console.log( this.certificadoServices.certificados);
 }
  
}

// constructor roda quando o componente nasce
// Router é o serviço de navegação
// private router cria e guarda a variável
// Angular injeta automaticamente
