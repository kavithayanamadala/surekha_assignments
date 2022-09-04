import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iemployee } from 'src/employee/employee';

@Component({
  selector:  'app-emp-edit-update',
  templateUrl: './emp-edit-update.component.html',
  styleUrls: ['./emp-edit-update.component.css']
})
export class EmpEditUpdateComponent implements OnInit {
  model:any={};
  model2:any={};
  edit= false;
  ShowEdit=false;
  myValue:any;

  constructor() { }

  ngOnInit(): void {
    this.model = new FormGroup({
      'id': new FormControl(this.model.id, Validators.required),
      'firstname': new FormControl(this.model.firstname,[
        Validators.required,
        Validators.minLength(4),
      ]),
      'lastname': new FormControl(this.model.lastname,[
        Validators.required,
        Validators.minLength(4),
      ]),
      'dob': new FormControl(this.model.dob),
      'salary': new FormControl(this.model.salary, Validators.required),
      'email': new FormControl(this.model.email, Validators.required)
    });
  }
  employees:Iemployee[]=
[
  {"id":1 ,"firstname":"kavitha" ,"lastname":"yanamadala" ,"salary":10000, "dob":"10/12/79" ,"email":"kavi@gmail.com","Action":""},
  {"id":2 ,"firstname":"advitha" ,"lastname":"bobba" ,"salary":20000, "dob":"11/07/03" ,"email":"advi@gmail.com","Action":""},
  {"id":3 ,"firstname":"saritha" ,"lastname":"kodali" ,"salary":30000, "dob":"02/12/87" ,"email":"sari@gmail.com","Action":""},

]

  editEmployee(i:any){
    console.log("hii i am from edit",i)
    this.edit=true;
    this.ShowEdit=false;
    this.model2.id=this.employees[i].id;
    this.model2.firstname=this.employees[i].firstname;
    this.model2.lastname=this.employees[i].lastname;
    this.model2.salary=this.employees[i].salary;
    this.model2.dob=this.employees[i].dob;
    this.model2.email=this.employees[i].email;
    this.myValue=i;

  }
updateEmployee(){
  console.log("hii i am from update")
    this.ShowEdit=true;
    this.edit = false;
    let k = this.myValue;
    for(let i=0;i<this.employees.length;i++){
      if(i==k)
      {
        this.employees[i]= this.model2;
        this.model2 = {};
      }
    }
  }

}


