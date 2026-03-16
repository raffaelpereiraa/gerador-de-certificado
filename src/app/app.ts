import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { CommonModule } from '@angular/common';



import { BaseUI } from "./components/base-ui/base-ui";





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUI],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Gerador de Certificados');


}
