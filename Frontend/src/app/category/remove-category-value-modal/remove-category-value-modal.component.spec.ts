import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCategoryValueModalComponent } from './remove-category-value-modal.component';

describe('RemoveCategoryValueModalComponent', () => {
  let component: RemoveCategoryValueModalComponent;
  let fixture: ComponentFixture<RemoveCategoryValueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveCategoryValueModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCategoryValueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
