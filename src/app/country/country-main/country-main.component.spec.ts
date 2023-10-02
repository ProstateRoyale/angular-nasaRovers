import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMainComponent } from './country-main.component';

describe('CountryMainComponent', () => {
  let component: CountryMainComponent;
  let fixture: ComponentFixture<CountryMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryMainComponent]
    });
    fixture = TestBed.createComponent(CountryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
