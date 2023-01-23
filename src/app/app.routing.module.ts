import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditcarComponent } from './editcar/editcar.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'car/:id', component: CarComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'addcar', component: AddCarComponent },
      { path: 'editcar/:id', component: EditcarComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


