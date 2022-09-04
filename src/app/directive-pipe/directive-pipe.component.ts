import { Component, OnInit } from '@angular/core';
import { Iemployee } from 'src/employee/employee';

@Component({
  selector: 'app-directive-pipe',
  templateUrl: './directive-pipe.component.html',
  styleUrls: ['./directive-pipe.component.css']
})
export class DirectivePipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  empList:Iemployee[]=
[
  {"id":1 ,"firstname":"kavitha" ,"lastname":"yanamadala" ,"salary":10000, "dob":"10/12/79" ,"email":"kavi@gmail.com","Action":""},
  {"id":2 ,"firstname":"advitha" ,"lastname":"bobba" ,"salary":20000, "dob":"11/07/03" ,"email":"advi@gmail.com","Action":""},
  {"id":3 ,"firstname":"saritha" ,"lastname":"kodali" ,"salary":30000, "dob":"02/12/87" ,"email":"sari@gmail.com","Action":""},

]

}
