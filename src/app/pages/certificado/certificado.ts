import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CertificadoServices } from '../../_services/certificado.services';
import { CertificadoModel } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.scss',
})

export class CertificadoComponent implements OnInit {


  id: string | null = null;
  certificado: CertificadoModel | undefined

 constructor (private certificadoServices: CertificadoServices, private route: ActivatedRoute) {}

 ngOnInit(): void {

  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.certificado = this.certificadoServices.certificados.find(item => item.id == this.id);
    console.log(this.certificado)
   
 })

  }
}

// constructor roda quando o componente nasce
// Router é o serviço de navegação
// private router cria e guarda a variável
// Angular injeta automaticamente
