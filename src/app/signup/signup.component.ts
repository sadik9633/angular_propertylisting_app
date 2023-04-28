import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { ProprtyService } from '../shared/proprty.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private ps:ProprtyService) {}

signupForm:any
ngOnInit(): void {
  this.signupForm= this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-z ]+')]],
    email:['',[Validators.required,Validators.email]],
    mobile:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]+')]], 
    password :['',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9a-zA-z^^!"§$%&/()=?´´+*#-_.:, ]+')]] 
    })
}

  signUp(){
   let signupData={
   name:this.signupForm.value.name,
   email:this.signupForm.value.email,
   mobile:this.signupForm.value.mobile,
   password:this.signupForm.value.password 
   } 
if(this.signupForm.valid){
  this.ps.signUp(signupData).subscribe(item =>{
    
    alert('signup success')
    this.signupForm.reset()
    this.router.navigateByUrl('login')
  
  },err=>{
    alert('user already present')
    this.router.navigateByUrl('login')
  }
  )
  }
  else{
    alert('invalid form')
  }
  }

}


