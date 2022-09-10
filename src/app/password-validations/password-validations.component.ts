import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-validations',
  templateUrl: './password-validations.component.html',
  styleUrls: ['./password-validations.component.css']
})
export class PasswordValidationsComponent implements OnInit {
reactiveForm:FormGroup;
submitted:boolean=false
  constructor(private formBuilder:FormBuilder) {
    this.reactiveForm=this.formBuilder.group({
      username:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      confirmpassword:new FormControl(null,[Validators.required])
    },
    {
      validators:this.MustMatch('password','confirmpassword')
    })
   }
   get f(){
    return this.reactiveForm.controls
   }
   MustMatch(controlname:string,matchingcontrolname:string){
    
    return(formGroup:FormGroup)=>{
      const control=formGroup.controls[controlname];
      const matchingcontrol=formGroup.controls[matchingcontrolname];
      if (matchingcontrol.errors && !matchingcontrol.errors.MustMatch){
        return
      }
      if (control.value!==matchingcontrol.value){
        matchingcontrol.setErrors({MustMatch:true})
      }
      else{
        matchingcontrol.setErrors(null)
      }
    }
   }
   onSubmit(){
    this.submitted=true;
    if(this.reactiveForm.invalid){
      return
    }
    else{
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reactiveForm.value));
    }
   }

  ngOnInit(): void {
  }

}
