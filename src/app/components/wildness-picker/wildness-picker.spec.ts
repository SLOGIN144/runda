import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildnessPicker } from './wildness-picker';

describe('WildnessPicker', () => {
  let component: WildnessPicker;
  let fixture: ComponentFixture<WildnessPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildnessPicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildnessPicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
