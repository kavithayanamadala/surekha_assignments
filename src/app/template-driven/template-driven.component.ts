import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  model:any={};

  constructor() { }

  ngOnInit(): void {
  }
onclick(){
  console.log("login done successfully....",this.model)
}
}
