import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryValue } from '../models/category-value.model';
import { CategoryApiService } from '../services/category-api.service';
import { SearchResult } from '../models/search-result.model';

@Component({
  selector: 'remove-category-value-modal',
  templateUrl: './remove-category-value-modal.component.html',
  styleUrls: ['./remove-category-value-modal.component.scss']
})
export class RemoveCategoryValueModalComponent implements OnInit {

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
    let request: CategoryValue = new CategoryValue();
    request.predefined = false;
    request.id = this.selectedCategoryValue.categoryValueId;

    this.categoryApiService.deleteCategoryValue(request)
      .subscribe((res: any[]) => {
        console.log(res);
        this.close("");
      });
  }

}