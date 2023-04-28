import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProprtyService } from '../shared/proprty.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any

  constructor(private fb: FormBuilder, private ps: ProprtyService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9a-zA-z^^!"§$%&/()=?´´+*#-_.:,;@]+')]]
    })
  }
  login() {
    if(this.loginForm.valid){

    this.ps.login().subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password


      })
      
      if (user) {
        alert('login success')
        this.loginForm.reset()
        this.router.navigateByUrl('properties')
      }
       else {
       
        alert('user not found please signup first')
      }
      
      
    })
    
  }else{
    alert('invalid form')
  }
  }
}
