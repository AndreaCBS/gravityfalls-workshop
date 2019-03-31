import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryApiService } from '../services/category-api.service';
import { CategoryValue } from '../models/category-value.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'add-category-value-modal',
  templateUrl: './add-category-value-modal.component.html',
  styleUrls: ['./add-category-value-modal.component.scss']
})
export class AddCategoryValueModalComponent implements OnInit, OnDestroy {

  private refreshDataSubscription: any;
  @Input() refreshDataEvent: Observable<void>;

  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<any>();

  categories: Category[];
  categoriesList: any[] = [];

  selectedCategory: Category;
  newValueName: string;

  displayAddCategoryModal: boolean = false;
  displayEditCategoryModal: boolean = false;

  constructor(private categoryApiService: CategoryApiService) { }

  ngOnInit() {

    this.refreshDataSubscription = this.refreshDataEvent.subscribe(() => {
      this.categoryApiService.getAllCategories()
        .subscribe((res: any[]) => {
          console.log(res);
          this.categories = res;
          this.categoriesList = this.formatCategoriesList();
          this.selectedCategory = null;
        });
    });

  }

  ngOnDestroy() {
    this.refreshDataSubscription.unsubscribe()
  }

  formatCategoriesList() {
    let result: any[] = [];
    this.categories.forEach(function (c) {
      result.push({ label: c.description, value: c });
    });
    return result;
  }

  close($event: any) {
    this.visible = false;
    this.onClose.emit("");
  }

  refreshData() {
    this.categoryApiService.getAllCategories()
      .subscribe((res: any[]) => {
        console.log(res);
        this.categories = res;
        this.categoriesList = this.formatCategoriesList();
        this.selectedCategory = null;
      });
  }

  confirmAction() {
    let request: CategoryValue = new CategoryValue();
    request.category = this.selectedCategory;
    request.description = this.newValueName;
    request.predefined = false;

    this.categoryApiService.saveCategoryValue(request)
      .subscribe((res: any[]) => {
        console.log(res);

        this.selectedCategory = null;
        this.newValueName = "";

        this.close("");

      });
  }

  showAddCategoryModal() {
    this.displayAddCategoryModal = true;
  }

  showEditCategoryModal() {
    this.displayEditCategoryModal = true;
  }

  hideAddCategoryModal() {
    this.displayAddCategoryModal = false;
  }

  hideEditCategoryModal() {
    this.displayEditCategoryModal = false;
  }

}
