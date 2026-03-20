import { Component } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoServices } from '../../_services/certificado.services';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.scss',
})
export class CertificadoForm {

 constructor (private certificadoServices: CertificadoServices) {}
  

  // array de lista de atividades

    certificado: Certificado ={
    atividades: [],
    nome: '',
    dataEmissao: ''

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

    this.certificado.dataEmissao = this.dataAtual()
    this.certificadoServices.adicionarCertificado(this.certificado);

}

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0')
    const mes = String(dataAtual.getMonth() + 1 ).padStart(2, '0')
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`
    return dataFormatada
  }

}
