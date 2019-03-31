import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryApiService } from '../services/category-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'remove-category-modal',
  templateUrl: './remove-category-modal.component.html',
  styleUrls: ['./remove-category-modal.component.scss']
})
export class RemoveCategoryModalComponent implements OnInit {

  private refreshDataSubscription: any;
  @Input() refreshDataEvent: Observable<void>;
  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<any>();

  categories: Category[];
  categoriesList: any[] = [];

  selectedCategory: Category;

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

  confirmAction() {

    this.categoryApiService.deleteCategory(this.selectedCategory)
      .subscribe((res: any[]) => {
        console.log(res);

        this.close("");

      });
  }

}
