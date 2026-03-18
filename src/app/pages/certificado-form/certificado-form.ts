import { Component } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.scss',
})
export class CertificadoForm {

  nome: string = '';
  atividade: string ='';
  atividades: string []=['angular', 'react', 'cobol'];

}
