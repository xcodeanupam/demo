import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { layoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    layoutRoutingModule
  ]
})
export class LayoutModule { }
