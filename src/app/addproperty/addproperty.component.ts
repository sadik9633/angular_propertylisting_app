import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProprtyService } from '../shared/proprty.service';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit{

  constructor(private fb:FormBuilder,private ps:ProprtyService ,private router:Router){}

  ngOnInit(): void {
    
  }
  addPropertiesForm=this.fb.group({
    ptitle:['',[Validators.required,Validators.pattern('[a-zA-z 0-9]+')]],
    pprice:['',[Validators.required,Validators.pattern('[0-9.]+')]],
    plocation:['',[Validators.required,Validators.pattern('[a-zA-z ,0-9]+')]],
    pdetails:['',[Validators.required,Validators.pattern('[a-zA-z ,0-9]+')]],
    cnumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]+')]]
  })

  addproperty(){
    let propertyData={
    
    ptitle:this.addPropertiesForm.value.ptitle,
    pprice:this.addPropertiesForm.value.pprice,
    plocation:this.addPropertiesForm.value.plocation,
    pdetails:this.addPropertiesForm.value.pdetails,
    cnumber:this.addPropertiesForm.value.cnumber
    }
    if(this.addPropertiesForm.valid){
      this.ps.addNewproperty(propertyData).subscribe((item:any)=>{
        alert('new property added')
        this.router.navigateByUrl('properties')
      
      })
    }else{
      alert('invailed form')
    }
   
  }
}
