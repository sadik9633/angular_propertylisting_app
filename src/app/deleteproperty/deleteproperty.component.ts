import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprtyService } from '../shared/proprty.service';

@Component({
  selector: 'app-deleteproperty',
  templateUrl: './deleteproperty.component.html',
  styleUrls: ['./deleteproperty.component.css']
})
export class DeletepropertyComponent implements OnInit{
prId:any
  constructor(private ar:ActivatedRoute, private ps:ProprtyService,private router:Router){}
  
  ngOnInit(): void {
    
    this.ar.params.subscribe((data:any)=>{
      this.prId=data["id"]
    })
    this.ps.deleteProperty(this.prId).subscribe((item:any)=>{
      alert('property deleted')
      this.router.navigateByUrl('properties')
    })
  }

}
