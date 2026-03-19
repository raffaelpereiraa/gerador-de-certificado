import { Component } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.scss',
})
export class CertificadoForm {

  nome: string = '';
  atividade: string ='';
  atividades: string []=['angular', 'react', 'cobol'];

  campoInvalido(control: NgModel){
    return control.invalid && control.touched
  }

  formValido() {
    return this.atividades.length > 0 && this.nome.length > 0;
  }

}
