import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProprtyService } from '../shared/proprty.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  allProperty: any

  
  constructor( private ps: ProprtyService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ps.allproperties().subscribe(data => {
      this.allProperty = data
    })

    
  }
logout(){
  
  this.router.navigateByUrl('login')
}
 
}
