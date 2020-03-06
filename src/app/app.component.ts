import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cadastre Pets';
  subTitulo = "Lista de Pets Cadastrados";
  isCollapsed = true;
}
