import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkScoreboard } from './drink-scoreboard';

describe('DrinkScoreboard', () => {
  let component: DrinkScoreboard;
  let fixture: ComponentFixture<DrinkScoreboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkScoreboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkScoreboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
