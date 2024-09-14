import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyShopComponent } from './daily-shop.component';

describe('DailyShopComponent', () => {
  let component: DailyShopComponent;
  let fixture: ComponentFixture<DailyShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
