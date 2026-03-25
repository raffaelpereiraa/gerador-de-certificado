import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CertificadoServices } from '../../_services/certificado.services';
import { CertificadoModel } from '../../interfaces/certificado';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.scss',
})

export class CertificadoComponent implements OnInit {


  id: string | null = null;
  certificado: CertificadoModel | undefined

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

 constructor (private certificadoServices: CertificadoServices, private route: ActivatedRoute) {}

 ngOnInit(): void {

  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.certificado = this.certificadoServices.certificados.find(item => item.id == this.id);
   
 })
  }

  downloadCertificado() {
    if(this.certificado == undefined){
      return;

    }
    html2canvas(this.certificadoElement.nativeElement, {scale: 2}).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png')
        link.download = 'certificado_' + this.certificado?.nome.replaceAll(' ', '_') + '.png';
        link.click();
      }
    )
  }

}

// constructor roda quando o componente nasce
// Router é o serviço de navegação
// private router cria e guarda a variável
// Angular injeta automaticamente
