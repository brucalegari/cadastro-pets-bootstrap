import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
