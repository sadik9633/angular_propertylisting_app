import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprtyService } from '../shared/proprty.service';

@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.css']
})
export class ViewpropertyComponent implements OnInit {

  pId:any
  pData:any
  constructor(private ps:ProprtyService,private ar:ActivatedRoute){}

  ngOnInit(): void {
   
    //access id 
this.ar.params.subscribe((data:any)=>{
this.pId=data["id"]

this.ps.viewProperty(this.pId).subscribe((data:any)=>{
  this.pData=data
  
})
})



    
  }

}
