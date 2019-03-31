import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryApiService } from '../services/category-api.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent implements OnInit {

  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<any>();
  @Output() onRefreshParentData = new EventEmitter<any>();

  newValueName: string;
  
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
    let request: Category = new Category();
    request.description = this.newValueName;
    request.predefined = false;

    this.categoryApiService.saveCategory(request)
      .subscribe((res: any[]) => {
        console.log("Add Category Modal" + res);
        this.newValueName = "";
        this.refreshParentDataAction("");
        this.close("");

      });
  }

}
