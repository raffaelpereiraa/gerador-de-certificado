import { Injectable } from '@angular/core';
import { CertificadoModel } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root',
})

export class CertificadoServices {

  certificados: CertificadoModel [] = [];

  constructor() {}

  adicionarCertificado(certificado: CertificadoModel) {
    this.certificados.unshift({...certificado});
    localStorage.setItem('certificados', JSON.stringify(this.certificados))
  }
  
}
