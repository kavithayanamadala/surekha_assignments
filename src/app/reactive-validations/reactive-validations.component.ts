import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validations',
  templateUrl: './reactive-validations.component.html',
  styleUrls: ['./reactive-validations.component.css']
})
export class ReactiveValidationsComponent implements OnInit {
  reactiveForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.reactiveForm=this.formBuilder.group({
      FullName: ['',Validators.required],
      Address: ['',Validators.required],
      City: ['',Validators.required],
      Email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Phoneno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      Confirmpassword: ['', Validators.required],
      terms:true
    })
  }
  get f(){
    return this.reactiveForm.controls;
}


onSubmit(){
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reactiveForm.value));
}
onclick(){

}
}
