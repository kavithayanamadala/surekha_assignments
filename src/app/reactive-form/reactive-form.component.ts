import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      FullName: [''],
      Address: [''],
      City: [''],
      Email: [''],
      Phoneno: [''],
      password: [''],
      Conformpassword: [''],
      terms:false,

    });
        }
        get f(){
          return this.registerForm.controls;
  }
onSubmit(){
  console.log("Login Done Successfully....",this.registerForm.controls)
}
onclick(){
  
}
}

