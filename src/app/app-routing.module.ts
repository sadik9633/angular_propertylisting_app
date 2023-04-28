import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { DeletepropertyComponent } from './deleteproperty/deleteproperty.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';

import { LoginComponent } from './login/login.component';
import { PropertiesComponent } from './properties/properties.component';
import { SignupComponent } from './signup/signup.component';
import { ViewpropertyComponent } from './viewproperty/viewproperty.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'properties',component:PropertiesComponent},
  {path:'view-property/:id', component:ViewpropertyComponent},
  {path:'delete-property/:id', component:DeletepropertyComponent},
  {path:'add-property', component:AddpropertyComponent},
  {path:'edit-property/:id', component:EditPropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
