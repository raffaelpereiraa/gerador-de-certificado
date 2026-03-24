import { Injectable } from '@angular/core';
import { CertificadoModel } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root',
})

export class CertificadoServices {

  certificados: CertificadoModel [] = [];

  constructor() {}

  adicionarCertificado(certificado: CertificadoModel) {
    this.certificados.push({...certificado});
    console.log (this.certificados);
    localStorage.setItem('certificados', JSON.stringify(this.certificados))
  }
  
}
