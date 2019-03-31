import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryToolbarComponent } from './category-toolbar/category-toolbar.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { CategoryGridComponent } from './category-grid/category-grid.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { EditCategoryModalComponent } from './edit-category-modal/edit-category-modal.component';
import { EditCategoryValueModalComponent } from './edit-category-value-modal/edit-category-value-modal.component';
import { AddCategoryValueModalComponent } from './add-category-value-modal/add-category-value-modal.component';
import { RemoveCategoryModalComponent } from './remove-category-modal/remove-category-modal.component';
import { RemoveCategoryValueModalComponent } from './remove-category-value-modal/remove-category-value-modal.component';

import { CategoryApiService } from './services/category-api.service';


@NgModule({
  declarations: [CategoryManagementComponent, CategoryToolbarComponent, CategorySearchComponent, CategoryGridComponent, AddCategoryModalComponent, EditCategoryModalComponent, EditCategoryValueModalComponent, AddCategoryValueModalComponent, RemoveCategoryModalComponent, RemoveCategoryValueModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    FormsModule
  ],
  providers: [
    CategoryApiService
  ]
})
export class CategoryModule { }
