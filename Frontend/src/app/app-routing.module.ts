import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryManagementComponent } from './category/category-management/category-management.component';
import { HomePageComponent } from './base/home-page/home-page.component';

const routes: Routes = [
  { path: 'categories', component: CategoryManagementComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
