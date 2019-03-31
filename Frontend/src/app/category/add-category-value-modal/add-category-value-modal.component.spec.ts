import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryValueModalComponent } from './add-category-value-modal.component';

describe('AddCategoryValueModalComponent', () => {
  let component: AddCategoryValueModalComponent;
  let fixture: ComponentFixture<AddCategoryValueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryValueModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryValueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
