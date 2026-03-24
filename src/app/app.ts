import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { CommonModule } from '@angular/common';



import { BaseUI } from "./components/base-ui/base-ui";
import { Certificados } from './pages/certificados/certificados';
import { CertificadoServices } from './_services/certificado.services';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUI],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App  implements OnInit{
  protected readonly title = signal('Gerador de Certificados');

  constructor(private certificadoServices: CertificadoServices){}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoServices.certificados = certificados ? JSON.parse(certificados) : [];
    console.log (this.certificadoServices.certificados)
  }

}
