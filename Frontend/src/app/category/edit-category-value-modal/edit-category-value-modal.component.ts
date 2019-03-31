import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryApiService } from '../services/category-api.service';
import { Category } from '../models/category.model';
import { SearchResult } from '../models/search-result.model';
import { CategoryValue } from '../models/category-value.model';

@Component({
  selector: 'edit-category-value-modal',
  templateUrl: './edit-category-value-modal.component.html',
  styleUrls: ['./edit-category-value-modal.component.scss']
})
export class EditCategoryValueModalComponent implements OnInit {

  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<any>();

  @Input() selectedCategoryValue: SearchResult;

  constructor(private categoryApiService: CategoryApiService) { }

  ngOnInit() {
  }

  close($event: any) {
    this.visible = false;
    this.onClose.emit("");
  }

  confirmAction() {
    let category: Category = new Category();
    let request: CategoryValue = new CategoryValue();
    request.id = this.selectedCategoryValue.categoryValueId;
    request.description = this.selectedCategoryValue.categoryValueName;
    request.predefined = false;
    category.id = this.selectedCategoryValue.categoryId;
    request.category = category;

    this.categoryApiService.updateCategoryValue(request)
      .subscribe((res: any[]) => {
        console.log(res);
        this.close("");
      });
  }

}
