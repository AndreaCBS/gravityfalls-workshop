import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss']
})
export class CategorySearchComponent implements OnInit {

  searchString: string = "";

  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchAction() {
    this.onSearch.emit(this.searchString);
  }

}
