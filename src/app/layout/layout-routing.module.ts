
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WriteReviewComponent } from './write-review/write-review.component';
const routes: Routes = [
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
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class layoutRoutingModule { }