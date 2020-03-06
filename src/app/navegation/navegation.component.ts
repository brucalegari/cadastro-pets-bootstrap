import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
