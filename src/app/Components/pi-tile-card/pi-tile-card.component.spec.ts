import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiTileCardComponent } from './pi-tile-card.component';

describe('PiTileCardComponent', () => {
  let component: PiTileCardComponent;
  let fixture: ComponentFixture<PiTileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiTileCardComponent]
    });
    fixture = TestBed.createComponent(PiTileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
