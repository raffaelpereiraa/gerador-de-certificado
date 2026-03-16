import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.scss',
})
export class ItemCertificado {

  id: string = '6';

}
