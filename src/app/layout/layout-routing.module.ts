
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WriteReviewComponent } from './write-review/write-review.component';
import { CategoryComponent } from './category/category.component';
import { FullViewComponent } from './full-view/full-view.component';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '', component: WebLayoutComponent,
    children: [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Amazon' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Amazon' }
  }, 
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Amazon' }
  }, 
  {
    path: 'review',
    component: WriteReviewComponent,
    data: { title: 'Amazon' }
  }, 
  {
    path: 'category/:categoryname',
    component: CategoryComponent,
    data: { title: 'Amazon' }
  }, 
  {
    path: 'blog/:title',
    component: BlogComponent,
    data: { title: 'Amazon' }
  }, 
  {
    path: 'view-product',
    component: FullViewComponent,
    data: { title: 'Amazon' }
  },
    ] 
}, 
  

  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class layoutRoutingModule { }