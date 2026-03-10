import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { PrimaryButton } from "./components/primary-button/primary-button";
import { SecondaryButton } from "./components/secondary-button/secondary-button";
import { ItemCertificado } from "./components/item-certificado/item-certificado";
import { BaseUI } from "./components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";
import { CertificadoForm } from "./pages/certificado-form/certificado-form";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, PrimaryButton, SecondaryButton, ItemCertificado, BaseUI, Certificados, CertificadoForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Gerador de Certificados');


}
