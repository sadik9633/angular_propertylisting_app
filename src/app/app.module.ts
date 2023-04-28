import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PropertiesComponent } from './properties/properties.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewpropertyComponent } from './viewproperty/viewproperty.component';
import { DeletepropertyComponent } from './deleteproperty/deleteproperty.component';

import { AddpropertyComponent } from './addproperty/addproperty.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PropertiesComponent,
    ViewpropertyComponent,
    DeletepropertyComponent,
    AddpropertyComponent,
    EditPropertyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
