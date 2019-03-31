import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../models/search-result.model';

@Component({
  selector: 'category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})
export class CategoryGridComponent implements OnInit {

  @Input() searchResult: SearchResult[];

  displayRemoveCategoryValueModal: boolean = false;
  displayEditCategoryValueModal: boolean = false;

  selectedCategoryValue: SearchResult;

  constructor() { }

  ngOnInit() {
  }

  deleteItem(searchResultItem: SearchResult) {
    this.showRemoveCategoryValueModal();
    this.selectedCategoryValue = searchResultItem;
    console.log(searchResultItem);
  }

  editItem(searchResultItem: SearchResult) {
    this.showEditCategoryValueModal();
    this.selectedCategoryValue = searchResultItem;
    console.log(searchResultItem);
  }

  showRemoveCategoryValueModal() {
    this.displayRemoveCategoryValueModal = true;
  }

  showEditCategoryValueModal() {
    this.displayEditCategoryValueModal = true;
  }

  hideRemoveCategoryValueModal() {
    this.displayRemoveCategoryValueModal = false;
  }

  hideEditCategoryValueModal() {
    this.displayEditCategoryValueModal = false;
  }

}
