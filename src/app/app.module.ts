import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { EditcarComponent } from './editcar/editcar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ AppComponent,  AddCarComponent, CarComponent, CarsComponent, EditcarComponent ],
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, HttpClientModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
