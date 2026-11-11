import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCodeInput } from './room-code-input';

describe('RoomCodeInput', () => {
  let component: RoomCodeInput;
  let fixture: ComponentFixture<RoomCodeInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomCodeInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomCodeInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
