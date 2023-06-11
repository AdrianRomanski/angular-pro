import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBranchComponent } from './stock-branch.component';

describe('StockBranchComponent', () => {
  let component: StockBranchComponent;
  let fixture: ComponentFixture<StockBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockBranchComponent]
    });
    fixture = TestBed.createComponent(StockBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
