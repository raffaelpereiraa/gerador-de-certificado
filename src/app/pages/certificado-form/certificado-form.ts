import { Component } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.scss',
})
export class CertificadoForm {

  

  // array de lista de atividades

    certificado: Certificado ={
    atividades: [],
    nome: ''

  };

  atividade : string = '';


  campoInvalido(control: NgModel){

    // Retorna TRUE se:
    // inválido 
    // e já foi tocado 
    // Usado pra mostrar erro
    return control.invalid && control.touched;
  }

  formValido() {

    // length - Retorna quantos itens existem
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {

    // push - Adiciona item no array
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  // Recebe posição do item
  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {

    if(!this.formValido()){
      return;
    }

    console.log(this.certificado)

}

}
