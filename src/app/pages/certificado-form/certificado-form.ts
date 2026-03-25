import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificadoModel } from '../../interfaces/certificado';
import { CertificadoServices } from '../../_services/certificado.services';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.scss',
})
export class CertificadoForm {

 constructor (private certificadoServices: CertificadoServices, private route: Router) {}

  @ViewChild('form') form!: NgForm;
  

  // array de lista de atividades

    certificado: CertificadoModel ={
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: '',

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

    if(this.atividade.length == 0) {
      return;
    }

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

    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4();
    this.certificadoServices.adicionarCertificado(this.certificado);

    this.route.navigate(['certificados', this.certificado.id]);

    // this.certificado = this.estadoInicialCertificado();
    // this.form.resetForm();

}

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0')
    const mes = String(dataAtual.getMonth() + 1 ).padStart(2, '0')
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`
    return dataFormatada
  }

  estadoInicialCertificado () :CertificadoModel {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: '',
    }

  }


}
