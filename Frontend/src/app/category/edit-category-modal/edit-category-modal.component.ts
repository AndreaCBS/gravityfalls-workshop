import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryApiService } from '../services/category-api.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'edit-category-modal',
  templateUrl: './edit-category-modal.component.html',
  styleUrls: ['./edit-category-modal.component.scss']
})
export class EditCategoryModalComponent implements OnInit {

  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<any>();
  @Output() onRefreshParentData = new EventEmitter<any>();

  @Input() selectedCategory: Category;

  constructor(private categoryApiService: CategoryApiService) { }

  ngOnInit() {
  }

  close($event: any) {
    this.visible = false;
    this.onClose.emit("");
  }

  refreshParentDataAction($event: any) {
    this.onRefreshParentData.emit("");
  }

  confirmAction() {
    let request: Category = this.selectedCategory;

    this.categoryApiService.updateCategory(request)
      .subscribe((res: any[]) => {
        console.log(res);
        this.refreshParentDataAction("");
        this.close("");
      });
  }

}
