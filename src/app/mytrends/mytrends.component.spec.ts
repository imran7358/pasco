import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytrendsComponent } from './mytrends.component';

describe('MytrendsComponent', () => {
  let component: MytrendsComponent;
  let fixture: ComponentFixture<MytrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
