import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-validations',
  templateUrl: './template-validations.component.html',
  styleUrls: ['./template-validations.component.css']
})
export class TemplateValidationsComponent implements OnInit {
  model:any={};

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

}
