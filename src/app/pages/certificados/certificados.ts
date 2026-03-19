import { Component } from '@angular/core';

import { ItemCertificado } from "../../components/item-certificado/item-certificado";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.scss',
})
export class Certificados {





}
