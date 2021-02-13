import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { layoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './auth/header/header.component';
import { FooterComponent } from './auth/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    layoutRoutingModule,FlexLayoutModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,
    FormsModule,ReactiveFormsModule,MatIconModule,MatMenuModule,MatButtonModule,
  ]
})
export class LayoutModule { }
