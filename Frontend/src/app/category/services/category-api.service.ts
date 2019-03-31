import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryValue } from '../models/category-value.model';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryApiService {

  private baseUrl = "http://localhost:9090/categories";

  constructor(private http: HttpClient) { }

  searchCategoryValues(search: string): Observable<any> {
    return this.http.get(this.baseUrl + '/search?search=' + search);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(this.baseUrl + '/getAll');
  }

  saveCategoryValue(categoryValue: CategoryValue): Observable<any> {
    return this.http.post(this.baseUrl + '/saveValue', categoryValue);
  }

  deleteCategory(category: Category): Observable<any> {
    return this.http.post(this.baseUrl + '/delete', category);
  }

  saveCategory(category: Category): Observable<any> {
    return this.http.post(this.baseUrl + '/save', category);
  }

  updateCategory(category: Category): Observable<any> {
    return this.http.post(this.baseUrl + '/update', category);
  }

  deleteCategoryValue(categoryValue: CategoryValue): Observable<any> {
    return this.http.post(this.baseUrl + '/deleteValue', categoryValue);
  }

  updateCategoryValue(category: Category): Observable<any> {
    return this.http.post(this.baseUrl + '/updateValue', category);
  }

}