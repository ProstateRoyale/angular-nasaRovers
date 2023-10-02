import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesMainComponent } from './jokes-main.component';

describe('JokesMainComponent', () => {
  let component: JokesMainComponent;
  let fixture: ComponentFixture<JokesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokesMainComponent]
    });
    fixture = TestBed.createComponent(JokesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
