import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from "../../components/item-certificado/item-certificado";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from "@angular/router";
import { CertificadoServices } from '../../_services/certificado.services';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.scss',
})
export class Certificados implements OnInit {

  certificados: Certificado [] = []

  constructor(private certificadoServices: CertificadoServices) {}

  ngOnInit(): void {
    this.certificados = this.certificadoServices.certificados;
    console.log(this.certificados);
  }



}
