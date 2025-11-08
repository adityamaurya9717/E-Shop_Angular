import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductLayout } from './show-product-layout';

describe('ShowProductLayout', () => {
  let component: ShowProductLayout;
  let fixture: ComponentFixture<ShowProductLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowProductLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
