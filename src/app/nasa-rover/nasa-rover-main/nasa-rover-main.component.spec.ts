import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaRoverMainComponent } from './nasa-rover-main.component';

describe('NasaRoverMainComponent', () => {
  let component: NasaRoverMainComponent;
  let fixture: ComponentFixture<NasaRoverMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasaRoverMainComponent]
    });
    fixture = TestBed.createComponent(NasaRoverMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
