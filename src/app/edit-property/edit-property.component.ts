import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprtyService } from '../shared/proprty.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
 
  pid:any
  pData:any
  constructor(private ar:ActivatedRoute,private ps:ProprtyService,private router:Router){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data["id"]
           })
       this.ps.viewProperty(this.pid).subscribe((data:any)=>{
        this.pData=data
       })    
      }
      updateProperty(form:any){
        this.ps.updateProperty(this.pid,this.pData).subscribe((item:any)=>{
          alert('updated')
          this.router.navigateByUrl("properties")
        })
  }
}
