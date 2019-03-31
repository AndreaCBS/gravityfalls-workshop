import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryValueModalComponent } from './edit-category-value-modal.component';

describe('EditCategoryModalComponent', () => {
  let component: EditCategoryValueModalComponent;
  let fixture: ComponentFixture<EditCategoryValueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCategoryValueModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryValueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
