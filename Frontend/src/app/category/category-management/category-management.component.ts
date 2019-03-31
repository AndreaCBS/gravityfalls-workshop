import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { CategoryApiService } from '../services/category-api.service';

@Component({
  selector: 'category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent implements OnInit {

  searchResult: SearchResult[];

  constructor(private categoryApiService: CategoryApiService) { }

  ngOnInit() {
    this.onSearch("");
  }

  onSearch(search: string) {

    this.categoryApiService.searchCategoryValues(search)
      .subscribe((res: any[]) => {
        console.log(res);
        this.searchResult = res;
      });

  }

}
