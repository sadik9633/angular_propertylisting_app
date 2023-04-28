import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProprtyService {

  constructor(private http:HttpClient) { }
  allproperties(){
return this.http.get('http://localhost:3000/properties')
  }
 
 //api call to add new property
 addNewproperty(propertyData:any){
return this.http.post('http://localhost:3000/properties',propertyData)
 }

 //api call to view property
 viewProperty(propertyId:any){
  return this.http.get('http://localhost:3000/properties/'+propertyId)
 }
 // api call to delete
 deleteProperty(propertyId:any){
  return this.http.delete('http://localhost:3000/properties/'+propertyId)
 }

 //api call to update
 updateProperty(propertyId:any,productData:any){
  return this.http.put('http://localhost:3000/properties/'+propertyId,productData)
 }

 //api call to add signup
 signUp(signupData:any){
  return this.http.post('http://localhost:3000/signupUsers',signupData)
 }
 login(){
  return this.http.get("http://localhost:3000/signupUsers")
 }  
}
