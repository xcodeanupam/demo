import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { LoginComponent } from './login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

import { RegisterComponent } from './register/register.component';
import { WriteReviewComponent } from './write-review/write-review.component';
import { CategoryComponent } from './category/category.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FullViewComponent } from './full-view/full-view.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { UserService } from '../core/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../core/user/api.service';
import { BlogComponent } from './blog/blog.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { BlogThreeComponent } from './blog-three/blog-three.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent, WriteReviewComponent, CategoryComponent, FullViewComponent, WebLayoutComponent, BlogComponent, BlogTwoComponent, BlogThreeComponent],
  imports: [
    CommonModule,
    layoutRoutingModule,FlexLayoutModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,
    FormsModule,ReactiveFormsModule,MatIconModule,MatMenuModule,MatButtonModule,MatCarouselModule,
    MatSidenavModule,MatPaginatorModule, HttpClientModule, MatProgressSpinnerModule,MatTooltipModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[UserService, ApiService]
})
export class LayoutModule { }
