import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'category-toolbar',
  templateUrl: './category-toolbar.component.html',
  styleUrls: ['./category-toolbar.component.scss']
})
export class CategoryToolbarComponent implements OnInit {

  displayAddCategoryValueModal: boolean = false;
  displayRemoveCategoryModal: boolean = false;

  refreshChildDataSubject: Subject<void> = new Subject<void>();

  emitRefreshChildData() {
    this.refreshChildDataSubject.next();
  }

  constructor() { }

  ngOnInit() {
  }

  showAddCategoryValueModal() {
    this.emitRefreshChildData();
    this.displayAddCategoryValueModal = true;
  }

  showRemoveCategoryModal() {
    this.emitRefreshChildData();
    this.displayRemoveCategoryModal = true;
  }

  hideAddCategoryValueModal() {
    this.displayAddCategoryValueModal = false;
  }

  hideRemoveCategoryModal() {
    this.displayRemoveCategoryModal = false;
  }

}